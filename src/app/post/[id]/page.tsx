import { Post } from "@/components";
import { posts } from "@/constants";

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === Number(params.id));
  return <Post title={post?.title} body={post?.body} />;
}
