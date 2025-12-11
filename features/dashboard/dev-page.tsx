import { LayoutDashboardIcon, UnplugIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
export default function DevPage() {
  return (
    <div className="flex h-[calc(100vh-10rem)] items-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <UnplugIcon />
          </EmptyMedia>
          <EmptyTitle>Still in Development</EmptyTitle>
          <EmptyDescription>
            This page is still in development. You will be notified when it is
            ready.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button asChild className="rounded-full">
            <Link href="/page">
              <LayoutDashboardIcon /> Go to Dashboard
            </Link>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}
