import { ClockIcon } from "lucide-react";
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
import type { Tpost } from "@/types";
import { PostCardActions } from "./card-actions";

export default function PostCard({ post }: { post: Tpost }) {
  return (
    <div className="flex cursor-pointer flex-col rounded-lg font-roboto transition-all duration-300 ease-in hover:bg-secondary lg:p-2">
      <Link href={`/view?v=${post.slug}`}>
        <Carousel
          className="group -mx-3.5 relative aspect-video h-full w-full bg-muted lg:mx-0"
          opts={{
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent>
            {post.imgUrls.map((image) => (
              <CarouselItem key={image}>
                <AspectRatio
                  className="overflow-hidden lg:rounded-lg"
                  ratio={16 / 9}
                >
                  <Image
                    alt="my image"
                    className="h-full w-full object-cover transition-all duration-300 ease-in group-hover:scale-105 lg:rounded-lg"
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
      </Link>
      <div className="flex gap-3">
        <Avatar className="mt-3 size-9">
          <AvatarImage src="/profile.svg" />
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
            <div className="flex items-center justify-between gap-1 pt-2 text-muted-foreground text-sm">
              <p className="text-muted-foreground text-sm">
                {post.businessName}
              </p>
              <div className="flex items-center gap-1">
                <ClockIcon className="size-4" />
                <span>{post.time}</span>
              </div>
            </div>
          </div>
          <PostCardActions />
        </div>
      </div>
    </div>
  );
}
