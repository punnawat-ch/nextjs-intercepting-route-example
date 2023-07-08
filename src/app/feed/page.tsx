import { Post } from "@/components";
import { posts } from "@/constants";
import Link from "next/link";

export default function Feed() {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Link href={`/post/${post.id}`} key={post.id}>
          <Post title={post.title} body={post.body} />
        </Link>
      ))}
    </div>
  );
}
