import Sidebar from "@/components/layout/backend/Sidebar";
import "@/index.css";
import BackendAuthGuard from "@/tools/BackendAuthGuard";
interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({
  children
}: RootLayoutProps) {
  return <html lang="en">
      <head>
        <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" async></script>
      </head>
      <body className="antialiased">
        <BackendAuthGuard>
          <div className="flex h-screen">
            <div className="flex-shrink-0"><Sidebar /></div>
            <div className="flex-1 overflow-y-auto">
              {children}
            </div>
          </div>
        </BackendAuthGuard>
      </body>
    </html>;
}
