/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "image.tmdb.org",
      "k.kakaocdn.net",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
    ], // 사용하는 이미지 호스트를 여기에 추가
  },
};

module.exports = nextConfig;
