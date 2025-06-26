import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  disableStaticImages: true

 },
 async redirects(){
  return [
    {
      source: '/',
      destination: '/login',
      permanent: true
    }
  ]
 }
  /* config options here */
};

export default nextConfig;
