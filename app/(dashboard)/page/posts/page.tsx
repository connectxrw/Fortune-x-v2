import { PlusIcon } from "lucide-react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { homePosts, postFilters } from "@/config/data";
import DashboardPostCard from "@/features/dashboard/posts/post-card";
import { SiteHeader } from "@/features/dashboard/site-header";
import PostsFilterBtns, {
  PostsFilterBtnsSelect,
} from "@/features/handle/post-filters";

export default function PostPage() {
  return (
    <div>
      <SiteHeader title="Posts" />
      <div className="@container/main flex flex-col gap-10 px-4 py-6 lg:p-6">
        <div className="flex items-center justify-between">
          <Suspense>
            <PostsFilterBtns className="hidden lg:flex" filters={postFilters} />
            <PostsFilterBtnsSelect
              className="lg:hidden"
              filters={postFilters}
            />
          </Suspense>
          <Button size="sm">
            <PlusIcon />
            Add New
          </Button>
        </div>
        <div className="grid @5xl/main:grid-cols-4 @xl/main:grid-cols-3 grid-cols-1 gap-4 gap-y-8">
          {homePosts.map((post) => (
            <DashboardPostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
