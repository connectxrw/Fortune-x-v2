import { Suspense } from "react";
import OtherPosts from "@/features/view/other-posts";
import ViewPost from "@/features/view/view-post";

export default function ViewPage(props: PageProps<"/view">) {
  return (
    <div className="container relative mx-auto min-h-screen max-w-7xl py-6 2xl:max-w-360">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:px-4 2xl:px-0">
        <div className="w-full max-w-[740px] 2xl:max-w-4xl">
          <Suspense>
            <ViewPost {...props} />
          </Suspense>
        </div>

        <Suspense>
          <OtherPosts {...props} />
        </Suspense>
      </div>
    </div>
  );
}
