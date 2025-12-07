import { Suspense } from "react";
import PageNavs from "@/features/handle/page-navs";
import PageTop from "@/features/handle/page-top";

export default function Layout(props: LayoutProps<"/[handle]">) {
  return (
    <div className="container py-3 font-roboto">
      <div className="flex flex-col gap-5">
        <PageTop />
        <Suspense>
          <PageNavs />
        </Suspense>
        {props.children}
      </div>
    </div>
  );
}
