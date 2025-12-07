import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
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
import type { Tposts } from "@/types";

export default function PostCard({ post }: { post: Tposts }) {
  return (
    <div className="flex flex-col rounded-lg p-2 font-roboto transition-all duration-300 ease-in hover:bg-muted">
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
      <div className="flex gap-3">
        <Avatar className="mt-3 size-9">
          <AvatarImage src="https://github.com/leconstantin.png" />
          <AvatarFallback>
            {post.businessName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex w-full justify-between gap-3">
          <div className="mt-3">
            <h3
              className="line-clamp-2 font-medium text-[16px] capitalize leading-5.5"
              title={post.title}
            >
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm">{post.businessName}</p>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <p>{post.views}</p>
              <p>•</p>
              <p>{post.time}</p>
            </div>
          </div>
          <Button className="mt-2 rounded-full" size="icon" variant={"ghost"}>
            <EllipsisVerticalIcon className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
