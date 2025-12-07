import { Suspense } from "react";
import OtherPosts from "@/features/view/other-posts";
import ViewPost from "@/features/view/view-post";

export default function ViewPage(props: PageProps<"/view">) {
  return (
    <div className="container relative grid min-h-screen grid-cols-12 py-6">
      <div className="col-span-full lg:col-span-8">
        <Suspense>
          <ViewPost {...props} />
        </Suspense>
      </div>

      <div className="col-span-full lg:col-span-4">
        <div className="h-full px-4 py-8 md:px-6 lg:px-0 lg:py-4">
          <Suspense>
            <OtherPosts {...props} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
