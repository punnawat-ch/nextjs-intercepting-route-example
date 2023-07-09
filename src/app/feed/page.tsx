"use client";
import { Post } from "@/components";
import { posts } from "@/constants";
import Link from "next/link";
import { useTimeout } from "usehooks-ts";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ThreeDots } from "react-loader-spinner";

export default function Feed() {
  const [displayedPosts, setDisplayedPosts] = useState<any>(posts.slice(0, 10));
  const [loading, setLoading] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);

  const loadMorePosts = useCallback(() => {
    if (!loading) {
      const nextIndex = displayedPosts.length + 10;
      const nextPosts = posts.slice(0, nextIndex);
      setDisplayedPosts(nextPosts);
    }
  }, [displayedPosts.length, loading]);

  const handleScroll = useCallback(() => {
    const element = document.documentElement;
    const scrollTop = window.pageYOffset || element.scrollTop;
    const scrollHeight = element.scrollHeight - element.clientHeight;
    const isAtEnd = scrollTop >= scrollHeight;

    if (isAtEnd) {
      if (displayedPosts.length === posts.length) {
        return;
      }
      setLoading(true);
      setTimeout(() => {
        loadMorePosts();
        setLoading(false);
      }, 1000);
    }
    setScrollTop(scrollTop);
  }, [loadMorePosts, displayedPosts.length]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <div className="flex flex-col gap-4" onScroll={handleScroll}>
      {displayedPosts.map((post: any) => (
        <Link href={`/post/${post.id}`} key={post.id}>
          <Post title={post.title} body={post.body} />
        </Link>
      ))}
      {loading && (
        <div className="w-full flex justify-center items-center">
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="rgb(79 70 229)"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      )}
    </div>
  );
}
