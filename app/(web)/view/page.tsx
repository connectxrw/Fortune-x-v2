import { Suspense } from "react";
import OtherPosts from "@/features/view/other-posts";
import ViewPost from "@/features/view/view-post";

export default function ViewPage(props: PageProps<"/view">) {
  return (
    <div className="container relative flex min-h-screen flex-col gap-5 py-6 font-roboto lg:flex-row">
      <div className="w-full max-w-[740px] 2xl:max-w-4xl">
        <Suspense>
          <ViewPost {...props} />
        </Suspense>
      </div>

      <Suspense>
        <OtherPosts {...props} />
      </Suspense>
    </div>
  );
}
