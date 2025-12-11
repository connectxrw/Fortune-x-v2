import Image from "next/image";
import { Button } from "@/components/ui/button";
import noContent from "@/public/no_content_illustration_v4.svg";
export default function AddNewPost() {
  return (
    <div className="flex flex-1 flex-col items-center gap-4 rounded-lg border px-6 py-4">
      <Image alt="no content svg" height={200} src={noContent} width={200} />
      <div className="text-center text-muted-foreground text-sm">
        {" "}
        <p>Want to see metrics on your recent post?</p>
        <p>Upload and publish a post to get started.</p>
      </div>
      <Button className="rounded-full">Create a post</Button>
    </div>
  );
}
