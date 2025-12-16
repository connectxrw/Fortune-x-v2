import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getPost } from "@/lib/api";
import { ProductMediaCard } from "../shared/post-card";
import PostBtns from "./post-btns";
import PostDetails from "./post-details";
import ProviderBtn from "./provider-btn";
export default async function ViewPost(params: PageProps<"/view">) {
  const { v } = await params.searchParams;
  const post = await getPost(v as string);
  if (!post) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1>Post not found</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      <ProductMediaCard post={post} />
      <h3 className="font-bold text-xl">{post.title}</h3>
      <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="flex w-full items-center justify-between gap-6 lg:justify-start">
          <Link
            className="flex items-center gap-3"
            href={`/p/${post.businessHandle}`}
            title={post.businessName}
          >
            <Avatar className="size-9 md:size-10">
              <AvatarImage src="/profile.svg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-[16px] leading-5.5 md:text-base">
                {post.businessName}
              </h3>
              <p className="text-muted-foreground text-xs md:text-xs">
                {post.views} Followers
              </p>
            </div>
          </Link>
          <ProviderBtn />
        </div>
        <ScrollArea className="flex w-full whitespace-nowrap lg:w-fit">
          <PostBtns />
          <ScrollBar className="hidden" orientation="horizontal" />
        </ScrollArea>
      </div>
      <PostDetails businessName={post.businessName} />
    </div>
  );
}
