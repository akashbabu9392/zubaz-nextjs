/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/single-blog", destination: "/blog/1", permanent: true },
      { source: "/single-service", destination: "/service/customer-support", permanent: true },
      { source: "/single-team", destination: "/team/mr-abraham-maslow", permanent: true },
      { source: "/single-career", destination: "/career/product-designer", permanent: true },
      { source: "/single-portfolio", destination: "/portfolio/e-commerce-system", permanent: true },
    ];
  },
};

export default nextConfig;

