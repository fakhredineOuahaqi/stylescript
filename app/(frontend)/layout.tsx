import Navigation from "@/components/layout/frontend/Navigation";
import Footer from "@/components/layout/frontend/Footer";
import "@/index.css";
interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({
  children
}: RootLayoutProps) {
  return <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>;
}
