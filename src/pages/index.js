import HomeScreen from "@app/screens/home";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomeScreen />
    </>
  );
}
