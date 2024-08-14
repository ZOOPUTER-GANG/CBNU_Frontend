import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import MainLayout from "@/components/main-layout";
import MypageLayout from "@/components/mypage-layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      {currentPath.includes("/mypage") ? (
        <MypageLayout>
          <Component {...pageProps} />
        </MypageLayout>
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </>
  );
}
