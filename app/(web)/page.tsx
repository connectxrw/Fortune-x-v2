import { CardSheet } from "@/features/home/card-sheet";
import PostCards from "@/features/home/post-cards";

export default function Home() {
  return (
    <div className="container space-y-6 py-6 pb-10">
      <PostCards />
      <CardSheet />
    </div>
  );
}
