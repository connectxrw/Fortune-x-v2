import { PostForm } from "@/features/dashboard/posts/new-form";
import { SiteHeader } from "@/features/dashboard/site-header";

export default function NewPostPage() {
  return (
    <div>
      <SiteHeader title="New Post" />
      <div className="@container/main flex flex-col gap-10 px-4 py-6 lg:p-6">
        New Post
        <PostForm />
      </div>
    </div>
  );
}
