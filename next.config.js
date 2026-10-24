/** @type {import('next').NextConfig} */
const nextConfig = {
  // The whole site is static (no API routes, no server-side data) —
  // export it as plain HTML/CSS/JS so it can deploy to any free static
  // host without needing a serverless runtime.
  output: "export",
  images: {
    // Static export can't use the on-demand Image Optimization API
    // (it needs a server). Images are served as-is instead.
    unoptimized: true,
  },
};

module.exports = nextConfig;
