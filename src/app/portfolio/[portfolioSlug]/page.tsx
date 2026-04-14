import { notFound } from "next/navigation";

import SinglePortfolio from "../../../components/pages/SinglePortfolio";
import { slugify } from "../../../lib/slug";

type Props = {
  params: { portfolioSlug: string };
};

const allowedPortfolioSlugs = [
  "e-commerce-system",
  "digital-art",
  "creative-work",
  "development",
].map(slugify);

export default function Page({ params }: Props) {
  if (!allowedPortfolioSlugs.includes(params.portfolioSlug)) return notFound();
  return <SinglePortfolio />;
}

