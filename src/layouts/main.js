import Footer from "@app/components/footer";
import Header from "@app/components/header";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
