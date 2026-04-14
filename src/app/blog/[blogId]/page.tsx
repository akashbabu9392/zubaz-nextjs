import { notFound } from "next/navigation";

import SingleBlog from "../../../components/pages/SingleBlog";
import blogs from "../../../db/blogs";

type Props = {
  params: { blogId: string };
};

export default function Page({ params }: Props) {
  const id = Number(params.blogId);
  const exists = blogs.some((b) => b.id === id);
  if (!exists) return notFound();

  return <SingleBlog />;
}

