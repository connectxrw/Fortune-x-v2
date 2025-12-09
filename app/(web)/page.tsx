import PostCards from "@/features/home/post-cards";

export default function Home() {
  return (
    <div className="container py-3">
      <div className="flex flex-col gap-6">
        <PostCards />
      </div>
    </div>
  );
}
