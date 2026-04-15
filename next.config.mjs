import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      // Only fires when no static file or Next.js route matches — safe for asset requests
      fallback: [
        { source: "/demos/:slug", destination: "/demos/:slug/index.html" },
        { source: "/demos/:slug/", destination: "/demos/:slug/index.html" },
        // Catch-all handles SPA client-side routes inside a demo
        { source: "/demos/:slug/:path*", destination: "/demos/:slug/index.html" },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
