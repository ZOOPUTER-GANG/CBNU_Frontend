/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/company/contact",
        destination: "/company/intro",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
