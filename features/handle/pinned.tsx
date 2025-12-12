import { PinIcon } from "lucide-react";
import { homePosts } from "@/config/data";
import PostCard from "../shared/post-card";

export default function PinnedPosts() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <PinIcon className="size-6 text-muted-foreground" />
        <h3 className="font-semibold text-lg">Pinned Posts</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
        {homePosts.map((post) => (
          <PostCard key={post.title} onPage post={post} />
        ))}
      </div>
    </div>
  );
}
