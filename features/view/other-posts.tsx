import { Separator } from "@/components/ui/separator";
import { getOtherPosts } from "@/lib/api";
import OtherPost from "./other-post";

export default async function OtherPosts(params: PageProps<"/view">) {
  const { v } = await params.searchParams;
  const otherPosts = await getOtherPosts(v as string);
  if (!otherPosts || otherPosts.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1>Other posts not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-medium text-lg leading-5">Similar Posts</h3>
      <Separator className="my-2" />
      <div className="flex h-fit flex-col gap-5 lg:gap-3">
        {otherPosts.map((post) => (
          <OtherPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
