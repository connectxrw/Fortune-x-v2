export type Tpost = {
  imgUrls: string[];
  title: string;
  slug: string;
  businessName: string;
  businessHandle: string;
  views: string;
  time: string;
  type: "post" | "product";
  price?: string;
  productName?: string;
};
