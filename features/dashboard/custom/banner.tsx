import Image from "next/image";
import { Button } from "@/components/ui/button";
import bannerImage from "@/public/banner.jpeg";
export default function BannerImage() {
  return (
    <div className="w-full max-w-3xl">
      <h3 className="font-medium">Banner Image</h3>
      <p className="text-muted-foreground text-sm">
        This image will appear across the top of your page
      </p>
      <div className="flex gap-8 pt-6">
        <div className="h-[160px] w-full max-w-[290px] overflow-hidden bg-muted p-4 lg:rounded-lg">
          <Image
            alt="my image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={bannerImage}
          />
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            For the best results on all devices, use an image that&apos;s at
            least 2048 x 1152 pixels and 6MB or less.
          </p>
          <div className="flex gap-2">
            <Button className="rounded-full" variant={"secondary"}>
              Change
            </Button>
            <Button className="rounded-full" variant={"secondary"}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
