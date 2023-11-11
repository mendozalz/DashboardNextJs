import "../app/ui/global.css";
import { montserrat } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
      <footer className="flex justify-center items-center py-2">Hecho por MENDOZALZ</footer>
    </html>
  );
}
