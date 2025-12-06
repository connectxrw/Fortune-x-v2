import {
  BriefcaseBusinessIcon,
  HeartPulseIcon,
  HouseIcon,
  LandmarkIcon,
  MapIcon,
  ShoppingCartIcon,
  TicketsIcon,
  UtensilsCrossedIcon,
} from "lucide-react";

export const menuNavs = [
  {
    title: "Restaurants",
    icon: UtensilsCrossedIcon,
    link: "/restaurants",
    active: true,
  },
  {
    title: "Housing",
    icon: HouseIcon,

    link: "/housing",
    active: true,
  },
  {
    title: "Tourism",
    icon: MapIcon,
    link: "/tourism",
    active: true,
  },

  {
    title: "HealthCare",
    icon: HeartPulseIcon,
    link: "/health",
    active: true,
  },
  {
    title: "Shopping",
    icon: ShoppingCartIcon,
    link: "/shopping",
    active: false,
  },
  {
    title: "Tickets",
    icon: TicketsIcon,
    link: "/tickets",
    active: false,
  },
  {
    title: "Jobs",
    icon: BriefcaseBusinessIcon,
    link: "/jobs",
    active: false,
  },
  {
    title: "Gvt services",
    icon: LandmarkIcon,
    link: "/gvt-services",
    active: false,
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Restaurant", href: "/restaurants", external: false },
      { name: "Housing", href: "/housing", external: false },
      { name: "Tourism", href: "/tourism", external: false },
      { name: "Health care", href: "/health", external: false },
    ],
  },

  {
    title: "Company",
    links: [
      { name: "About Us", href: "/", external: false },
      { name: "Help Center", href: "/help", external: false },
      { name: "Blogs", href: "/", external: false },
      { name: "Waiting List", href: "/waiting-list", external: false },
      { name: "Contact Us", href: "/help", external: false },
    ],
  },

  {
    title: "Terms & Policies",
    links: [
      { name: "Terms of Use", href: "/", external: false },
      { name: "Privacy Policy", href: "/", external: false },
      { name: "Cookie Policy", href: "/", external: false },
      { name: "Editorial Policy", href: "/", external: false },
    ],
  },
];
