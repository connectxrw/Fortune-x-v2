import { SiteHeader } from "@/features/dashboard/site-header";

export default function CustomizationPage() {
  return (
    <>
      <SiteHeader title="Insights" />
      <div className="@container/main flex flex-col gap-10 px-4 lg:p-6 lg:pb-10">
        insights chats
      </div>
    </>
  );
}
