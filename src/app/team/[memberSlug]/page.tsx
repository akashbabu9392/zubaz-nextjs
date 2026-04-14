import { notFound } from "next/navigation";

import SingleTeam from "../../../components/pages/SingleTeam";
import teamData from "../../../db/team-data";
import { slugify } from "../../../lib/slug";

type Props = {
  params: { memberSlug: string };
};

export default function Page({ params }: Props) {
  const exists = teamData.some(
    (m: any) => slugify(String(m?.name ?? "")) === params.memberSlug,
  );
  if (!exists) return notFound();

  return <SingleTeam />;
}

