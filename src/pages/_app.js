import MainLayout from "@app/layouts/main";
import "@app/styles/style.scss";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
