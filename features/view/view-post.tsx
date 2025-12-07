import Image from "next/image";
import Link from "next/link";
import { CarouselDots } from "@/components/custom/carousel-dots";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getPost } from "@/lib/api";
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
      <Carousel
        className="group relative"
        opts={{
          loop: true,
          dragFree: true,
        }}
      >
        <CarouselContent>
          {post.imgUrls.map((image) => (
            <CarouselItem key={image}>
              <AspectRatio
                className="overflow-hidden rounded-lg"
                ratio={16 / 9}
              >
                <Image
                  alt="my image"
                  className="h-full w-full rounded-lg object-cover transition-all duration-300 ease-in group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={image}
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dots under carousel */}
        {post.imgUrls.length > 1 && (
          <>
            {/* Previous and Next buttons on center of the carousel */}
            <div className="absolute top-1/2 hidden w-full justify-between group-hover:flex">
              <CarouselPrevious className="absolute left-2 bg-transparent text-white" />
              <CarouselNext className="absolute right-2 bg-transparent text-white" />
            </div>
            <div className="-translate-x-1/2 absolute bottom-2 left-1/2">
              <CarouselDots />
            </div>
          </>
        )}
      </Carousel>
      <h3 className="font-bold text-xl">{post.title}</h3>
      <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="flex w-full items-center justify-between gap-6 lg:justify-start">
          <Link
            className="flex items-center gap-3"
            href={`/p/${post.businessHandle}`}
            title={post.businessName}
          >
            <Avatar className="size-9 md:size-10">
              <AvatarImage src="https://github.com/leconstantin.png" />
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
