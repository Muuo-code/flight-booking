// @ts-expect-error: CSS module declaration missing
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Welcome to the site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">{children}</body>
    </html>
  );
}
