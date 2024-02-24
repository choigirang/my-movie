import {
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v13-pagesRouter";
import Header from "@/components/common/Header";
import { NextPageContext } from "next";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <>
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
