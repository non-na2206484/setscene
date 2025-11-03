import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Set Scene | Step Into Your Books",
  description: "VR software that brings literature to life through immersive book-based environments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Umami Analytics */}
        <Script
          async
          src="https://us.umami.is/script.js"
          data-website-id="90963870-228e-40ce-a1f0-7cf7d39e2b8c"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
