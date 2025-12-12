import Image from "next/image";
import Link from "next/link";
import type { Tpost } from "@/types";
import { PostCardActions } from "../shared/card-actions";

export default function OtherPost({ post }: { post: Tpost }) {
  return (
    <div className="flex w-full flex-col gap-3 lg:flex-row">
      <Link
        className="h-full w-full lg:max-w-[168px]"
        href={`/view?v=${post.slug}`}
      >
        <Image
          alt="Photo by Drew Beamer"
          className="aspect-video h-full w-full rounded-lg object-cover"
          height={95}
          src={post.imgUrls[0]}
          width={168}
        />
      </Link>

      <div className="flex w-full justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <Link
            className="line-clamp-2 font-medium text-sm capitalize leading-5"
            href={`/view?v=${post.slug}`}
            title={post.title}
          >
            {post.title}
          </Link>
          <div className="flex items-center gap-2 pt-2 text-muted-foreground text-xs md:text-sm">
            <p>{post.businessName}</p>
            <p>.</p>
            <p>{post.time}</p>
          </div>
        </div>
        <PostCardActions />
      </div>
    </div>
  );
}
