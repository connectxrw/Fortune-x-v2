import AddNewPost from "@/features/dashboard/home/add-new-post";
import { SectionCards } from "@/features/dashboard/home/cards";
import LatestPost from "@/features/dashboard/home/latest-post";
import { SiteHeader } from "@/features/dashboard/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader title="Dashboard" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="flex flex-col gap-5 px-4 lg:flex-row lg:px-6">
              <AddNewPost />
              <LatestPost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
