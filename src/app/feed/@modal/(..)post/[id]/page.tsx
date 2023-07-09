"use client";
import { Modal, Post } from "@/components";
import { posts } from "@/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PostModal({ params }: { params: { id: string } }) {
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();

  const handleClose = () => {
    router.back();
    setIsOpen(false);
  };
  const post = posts.find((post) => post.id === Number(params.id));
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Post title={post?.title} body={post?.body} />
    </Modal>
  );
}
