/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["image.tmdb.org"], // 사용하는 이미지 호스트를 여기에 추가
  },
};

module.exports = nextConfig;
