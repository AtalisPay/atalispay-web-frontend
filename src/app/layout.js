import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingFAQ from "@/components/FloatingFAQ";

export const metadata = {
  title: "AtalisPay",
  description: "Empowering Africa's digital payments ecosystem",
  icons: {
    icon: "/favicon.PNG",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        <main className="pt-24">{children}</main>
        <FloatingFAQ />
        <Footer />
      </body>
    </html>
  );
}
