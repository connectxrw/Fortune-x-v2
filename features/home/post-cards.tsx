import { homePosts } from "@/config/data";
import PostCard from "../shared/post-card";

export default function PostCards() {
  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {homePosts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
}
