import BannerImage from "@/features/dashboard/custom/banner";
import {
  BusinessContactInfo,
  BusinessDescription,
  BusinessHandle,
  BusinessLinks,
  BusinessName,
} from "@/features/dashboard/custom/business-info";
import PagePicture from "@/features/dashboard/custom/page-picture";
import { SiteHeader } from "@/features/dashboard/site-header";

export default function CustomizationPage() {
  return (
    <>
      <SiteHeader title="Customization" />
      <div className="@container/main flex flex-col gap-10 px-4 lg:p-6 lg:pb-10">
        <BannerImage />
        <PagePicture />
        <BusinessName />
        <BusinessHandle />
        <BusinessDescription />
        <BusinessLinks />
        <BusinessContactInfo />
      </div>
    </>
  );
}
