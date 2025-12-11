import Image from "next/image";
import Link from "next/link";
import { CarouselDots } from "@/components/custom/carousel-dots";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { homePosts } from "@/config/data";
import MyPostCard from "../handle/my-post-card";
import PostBtns from "../view/post-btns";
import PostDetails from "../view/post-details";
import ProviderBtn from "../view/provider-btn";

export function CardSheet() {
  const post = homePosts[0];
  const other = homePosts.filter((p) => p.slug !== post.slug);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <ScrollArea className="flex h-full">
          <SheetHeader className="flex gap-4 px-1 lg:px-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Avatar className="mt-3 size-9">
                  <AvatarImage src="/profile.svg" />
                  <AvatarFallback>
                    {post.businessName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <SheetTitle>{post.businessName}</SheetTitle>
                  <p className="text-muted-foreground text-xs md:text-xs">
                    {post.views} Followers
                  </p>
                </div>
              </div>
              <ProviderBtn />
            </div>

            <SheetDescription>{post.title}</SheetDescription>
          </SheetHeader>
          <Carousel
            className="group relative aspect-video w-full bg-muted"
            opts={{
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent>
              {post.imgUrls.map((image) => (
                <CarouselItem key={image}>
                  <Link href={`/view?v=${post.slug}`}>
                    <AspectRatio className="overflow-hidden" ratio={16 / 9}>
                      <Image
                        alt="my image"
                        className="h-full w-full object-cover transition-all duration-300 ease-in group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={image}
                      />
                    </AspectRatio>
                  </Link>
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
          <div className="flex w-full flex-col gap-4 py-3 lg:px-2">
            <ScrollArea className="flex w-full whitespace-nowrap">
              <PostBtns />
              <ScrollBar className="hidden" orientation="horizontal" />
            </ScrollArea>
            <PostDetails businessName={post.businessName} />
          </div>
          <div className="grid grid-cols-1 gap-y-8 px-2 md:grid-cols-1">
            {other.map((pos) => (
              <MyPostCard key={pos.title} post={pos} />
            ))}
          </div>
          <SheetFooter>
            <Button type="submit">See more</Button>
          </SheetFooter>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
