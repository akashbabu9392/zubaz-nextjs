import { notFound } from "next/navigation";

import SingleCareer from "../../../components/pages/SingleCareer";
import careerData from "../../../db/career-data";
import { slugify } from "../../../lib/slug";

type Props = {
  params: { jobSlug: string };
};

export default function Page({ params }: Props) {
  const exists = careerData.some(
    (j: any) => slugify(String(j?.title ?? "")) === params.jobSlug,
  );
  if (!exists) return notFound();

  return <SingleCareer />;
}

