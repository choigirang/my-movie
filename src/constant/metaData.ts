import { Metadata } from "next";

interface MetadataProps {
  [key: string]: string;
}

export const META = {
  title: "My Movie | 나의 영화 기록 일지",
  siteName: "My Movie",
  description: "매일의 영화를 기록하거나, 새로운 영화로 계획을 세우는 캘린더.",
  keyword: ["영화 기록", "영화 추천", "최신 영화", "캘린더"],
  url: "https://my-movie-tawny.vercel.app/",
  googleVerification: process.env.GOOGLE || "",
  naverVerification: process.env.NAVER || "",
  ogImage: "/main.png",
} as const;

export const getMetadata = (metadataProps?: MetadataProps) => {
  const { title, description, asPath } = metadataProps || {};

  const TITLE = title ? `${title} | 영화 기록 일지` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? META.url + asPath : META.url;
  const OG_IMAGE = META.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: "ko_KR",
      type: "website",
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
    verification: {
      google: META.googleVerification,
      other: {
        "naver-site-verification": META.naverVerification,
      },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
};
