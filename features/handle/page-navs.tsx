import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import NavItem from "./nav-item";

export default async function PageNavs(props: LayoutProps<"/[handle]">) {
  const { handle } = await props.params;
  // on url handle in /@handle i want handle only
  const handleOnly = handle.replace("%40", "");

  const navs = [
    {
      label: "Home",
      href: `/@${handleOnly}`,
    },
    {
      label: "Posts",
      href: `/@${handleOnly}/posts`,
    },
    {
      label: "About",
      href: `/@${handleOnly}/about`,
    },
    {
      label: "Contact",
      href: `/@${handleOnly}/contact`,
    },
  ];

  return (
    <nav
      className={cn(
        "sticky top-15 w-full gap-4 border-border border-b bg-transparent"
      )}
    >
      <div className="flex items-center gap-4 transition-all duration-1000 ease-in">
        <ScrollArea className="w-screen overflow-hidden lg:w-full">
          <div className="mx-auto flex w-full items-center gap-4">
            {navs.map((nav) => (
              <NavItem href={nav.href} key={nav.href} label={nav.label} />
            ))}
          </div>
          <ScrollBar className="h-0 w-0" orientation="horizontal" />
        </ScrollArea>
      </div>
    </nav>
  );
}
