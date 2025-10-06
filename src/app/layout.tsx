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
      <body className="max-w-8xl mx-auto px-1">{children}</body>
    </html>
  );
}
