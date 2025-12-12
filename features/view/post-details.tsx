import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
export default function PostDetails({
  businessName,
}: {
  businessName: string;
}) {
  return (
    <section className="rounded-lg bg-muted/80 p-4">
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="w-full cursor-pointer">
          <div className="flex w-full items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-4">
              <p>Oct29, 2025</p>
            </div>
            <p>See more...</p>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="prose prose-sm dark:prose-invert mt-4 max-w-none">
            <p>
              <strong>Wake up to flavor!</strong> Start your day the right way
              with a freshly prepared breakfast at{" "}
              <strong>{businessName}</strong>. Whether you crave rich coffee,
              warm pastries, or a hearty breakfast plate, our menu is designed
              to fuel your best morning.
            </p>

            <ul>
              <li>Freshly made breakfast every morning</li>
              <li>
                Cozy, distraction-free atmosphere, perfect for work or brunch
              </li>
              <li>Fast service so you never start your day late</li>
              <li>Signature dishes you&apos;ll want to order again</li>
            </ul>

            <p className="mt-2">
              👉{" "}
              <em>
                Treat yourself today, your perfect breakfast is waiting at{" "}
                {businessName}.
              </em>
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
}
