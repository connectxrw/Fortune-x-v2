import { Suspense } from "react";
import { homePosts, postFilters } from "@/config/data";
import PostCard from "@/features/shared/post-card";
import PostsFilterBtns from "@/features/shared/post-filters";

export default function MyPosts() {
  return (
    <div className="space-y-5">
      <Suspense>
        <PostsFilterBtns filters={postFilters} />
      </Suspense>
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
        {homePosts.map((post) => (
          <PostCard key={post.title} onPage post={post} />
        ))}
      </div>
    </div>
  );
}
