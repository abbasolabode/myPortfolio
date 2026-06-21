import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function AppLayouts() {
  return (
    <main className=" ">
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
