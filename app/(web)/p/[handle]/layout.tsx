import { Suspense } from "react";
import PageNavs from "@/features/handle/page-navs";
import PageTop from "@/features/handle/page-top";

export default function Layout(props: LayoutProps<"/p/[handle]">) {
  return (
    <div className="container py-3 font-roboto">
      <div className="flex flex-col gap-5">
        <PageTop />
        <Suspense>
          <PageNavs {...props} />
        </Suspense>
        <main className="min-h-[500px]">{props.children}</main>
      </div>
    </div>
  );
}
