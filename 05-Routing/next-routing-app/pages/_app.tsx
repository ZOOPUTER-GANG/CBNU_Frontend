import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Header from "@/components/header";
import Footer from "@/components/footer";
import BaseLayout from "@/components/baselayout";
import AuthLayout from "@/components/authlayout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  console.log("현재 url경로", currentPath);

  return (
    <>
      {currentPath.includes("/mypage") ? (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      ) : (
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      )}
    </>
  );
}
