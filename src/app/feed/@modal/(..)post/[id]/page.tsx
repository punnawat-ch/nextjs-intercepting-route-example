import { Modal, Post } from "@/components";
import { posts } from "@/constants";

export default function PostModal({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === Number(params.id));
  return (
    <Modal>
      <Post title={post?.title} body={post?.body} />
    </Modal>
  );
}
