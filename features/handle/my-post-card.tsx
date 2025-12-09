import Image from "next/image";
import Link from "next/link";
import { CarouselDots } from "@/components/custom/carousel-dots";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Tpost } from "@/types";
import { MyCardActions } from "./my-card-actions";

export default function MyPostCard({ post }: { post: Tpost }) {
  return (
    <div className="flex cursor-pointer flex-col">
      <Link href={`/view?v=${post.slug}`}>
        <Carousel
          className="group -mx-3.5 relative lg:mx-0"
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

      <div className="flex w-full justify-between gap-3">
        <div className="mt-3 space-y-2">
          <h3
            className="line-clamp-2 font-medium text-[16px] capitalize leading-5.5"
            title={post.title}
          >
            {post.title}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <p>{post.time}</p>
          </div>
        </div>
        <MyCardActions />
      </div>
    </div>
  );
}
