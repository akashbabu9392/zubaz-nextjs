import { notFound } from "next/navigation";

import SingleService from "../../../components/pages/SingleService";
import serviceData from "../../../db/service-data";
import { slugify } from "../../../lib/slug";

type Props = {
  params: { serviceSlug: string };
};

export default function Page({ params }: Props) {
  const exists = serviceData.some(
    (s) => slugify(String(s.title ?? "")) === params.serviceSlug,
  );
  if (!exists) return notFound();

  return <SingleService />;
}

