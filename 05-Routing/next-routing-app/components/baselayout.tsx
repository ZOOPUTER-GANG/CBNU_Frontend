import Header from "@/components/header";
import Footer from "@/components/footer";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default BaseLayout;
