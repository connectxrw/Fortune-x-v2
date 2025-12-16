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
import { GridTileImage } from "./tile";

export default function PostCard({
  post,
  onPage,
}: {
  post: Tpost;
  onPage?: boolean;
}) {
  return (
    <div className="flex cursor-pointer flex-col rounded-lg font-roboto transition-all duration-300 ease-in hover:bg-secondary md:p-2">
      <ProductMediaCard post={post} />
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
            <div className="flex items-center gap-2 pt-2 text-muted-foreground text-xs md:text-sm">
              {!onPage && (
                <>
                  <p>{post.businessName}</p>
                  <p>.</p>
                </>
              )}
              <p>{post.time}</p>
            </div>
          </div>
          <PostCardActions />
        </div>
      </div>
    </div>
  );
}

export function ProductMediaCard({ post }: { post: Tpost }) {
  if (post.type === "product") {
    return (
      <Link
        className="relative block aspect-video w-full"
        href={`/view?v=${post.slug}`}
        prefetch={true}
      >
        <GridTileImage
          alt={post.title}
          fill
          label={{
            position: "bottom",
            title: post.productName || "",
            amount: post.price || "",
            currencyCode: "USD",
          }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={post.imgUrls[0]}
        />
      </Link>
    );
  }

  return (
    <div>
      <Carousel
        className="group relative aspect-video h-full w-full rounded-lg bg-muted"
        opts={{
          loop: true,
          dragFree: true,
        }}
      >
        <CarouselContent>
          {post.imgUrls.map((image) => (
            <CarouselItem key={image}>
              <Link href={`/view?v=${post.slug}`}>
                <AspectRatio
                  className="overflow-hidden rounded-lg"
                  ratio={16 / 9}
                >
                  <Image
                    alt="my image"
                    className="h-full w-full rounded-lg object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={image}
                  />
                </AspectRatio>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {post.imgUrls.length > 1 && (
          <>
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
    </div>
  );
}
