import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import SocialSliderTray from "../components/SocialSliderTray";

export default function AppLayouts() {
  return (
    <main className=" ">
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
      <SocialSliderTray />
    </main>
  )
}
