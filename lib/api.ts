import { homePosts } from "@/config/data";

export const getPost = (slug: string) => {
  const res = homePosts.find((post) => post.slug === slug);
  return res;
};
