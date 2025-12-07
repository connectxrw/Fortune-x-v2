export default async function OtherPosts(params: PageProps<"/view">) {
  const { v } = await params.searchParams;
  return <div>OtherPosts </div>;
}
