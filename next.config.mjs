/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FORMSPREE_FORM_ID: process.env.FORMSPREE_FORM_ID,
  },
};

export default nextConfig;
