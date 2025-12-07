import {
  ActivityIcon,
  BookmarkIcon,
  BriefcaseBusinessIcon,
  CircleQuestionMarkIcon,
  FlagIcon,
  GalleryThumbnailsIcon,
  HeartPulseIcon,
  HouseIcon,
  LandmarkIcon,
  MapIcon,
  MessageSquareShareIcon,
  Repeat2Icon,
  SettingsIcon,
  ShoppingCartIcon,
  ThumbsUpIcon,
  TicketsIcon,
  UtensilsCrossedIcon,
} from "lucide-react";
import type { Tpost } from "@/types";

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
export const youNavs = [
  {
    title: "Activity",
    icon: ActivityIcon,
    link: "/activity",
    active: true,
  },
  {
    title: "Liked Posts",
    icon: ThumbsUpIcon,

    link: "/liked-posts",
    active: true,
  },
  {
    title: "Bookmarks",
    icon: BookmarkIcon,
    link: "/bookmarks",
    active: true,
  },

  {
    title: "Your posts",
    icon: GalleryThumbnailsIcon,
    link: "/your-posts",
    active: true,
  },
  {
    title: "Shared",
    icon: Repeat2Icon,
    link: "/shared",
    active: true,
  },
];
export const otherNavs = [
  {
    title: "Settings",
    icon: SettingsIcon,
    link: "/settings",
    active: true,
  },
  {
    title: "Report history",
    icon: FlagIcon,

    link: "/liked-posts",
    active: true,
  },
  {
    title: "Help",
    icon: CircleQuestionMarkIcon,
    link: "/help",
    active: true,
  },

  {
    title: "Send feedback",
    icon: MessageSquareShareIcon,
    link: "/send-feedback",
    active: true,
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

export const homeFilters = [
  {
    label: "Restaurants",
    slug: "restaurants",
  },
  {
    label: "Housing",
    slug: "housing",
  },
  {
    label: "Tourism",
    slug: "tourism",
  },
  {
    label: "Health care",
    slug: "health",
  },
  {
    label: "Shopping",
    slug: "shopping",
  },
  {
    label: "Tickets",
    slug: "tickets",
  },
  {
    label: "Jobs",
    slug: "jobs",
  },
  {
    label: "Gvt services",
    slug: "gvt-services",
  },
];

export const homePosts: Tpost[] = [
  {
    imgUrls: ["/places/kivu.jpg"],
    title: "Escape to Lake Kivu (Book Your Unforgettable Experience Today)",
    slug: "escape-to-lake-kivu-book-your-unforgettable-experience-today",
    businessName: "Rathon Ltd",
    businessHandle: "@rathon",
    views: "4.9K",
    time: "17 hours ago",
  },
  {
    imgUrls: ["/places/nyungwe.jpg"],
    title: "Discover Nyungwe’s Hidden Wonders (Join the Next Adventure)",
    slug: "discover-nyungwe-hidden-wonders-join-the-next-adventure",
    businessName: "Nyungwe Ltd",
    businessHandle: "@nyungwe",
    views: "7K",
    time: "1 hours ago",
  },
  {
    imgUrls: ["/restaurant/image-1.avif"],
    title: "Start Your Morning Right (Treat Yourself to Breakfast at Bistro)",
    slug: "start-your-morning-right-treat-yourself-to-breakfast-at-bistro",
    businessName: "Bistro",
    businessHandle: "@bistro",
    views: "1.2K",
    time: "10 minutes ago",
  },
  {
    imgUrls: ["/houses/a.avif", "/houses/b.avif"],
    title: "Feel at Home Instantly (Book This Cozy Stay Today)",
    slug: "feel-at-home-instantly-book-this-cozy-stay-today",
    businessName: "HouseRent",
    businessHandle: "@houserent",
    views: "1.2K",
    time: "10 minutes ago",
  },
];
