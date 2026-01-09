import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="pt-[90px] min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
