import { Button } from "@/components/ui/button";
import { homePosts } from "@/config/data";
import MyPostCard from "@/features/handle/my-post-card";

export default function LatestPost() {
  const post = homePosts[0];
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-lg border px-6 py-4">
      <h2 className="font-semibold text-lg">Latest Post</h2>
      <MyPostCard key={post.title} post={post} />
      <Button className="rounded-full">View all posts</Button>
    </div>
  );
}
