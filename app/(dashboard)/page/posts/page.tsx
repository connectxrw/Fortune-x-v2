import { PlusIcon } from "lucide-react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { homePosts, postFilters } from "@/config/data";
import { SiteHeader } from "@/features/dashboard/site-header";
import MyPostCard from "@/features/handle/my-post-card";
import PostsFilterBtns from "@/features/handle/post-filters";

export default function PostPage() {
  return (
    <div>
      <SiteHeader title="Posts" />
      <div className="@container/main flex flex-col gap-10 px-4 lg:p-6">
        <div className="flex items-center justify-between">
          <Suspense>
            <PostsFilterBtns filters={postFilters} />
          </Suspense>
          <Button size="sm">
            <PlusIcon />
            Add New
          </Button>
        </div>
        <div className="grid @5xl/main:grid-cols-4 @xl/main:grid-cols-3 grid-cols-1 gap-4 gap-y-8">
          {homePosts.map((post) => (
            <MyPostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
