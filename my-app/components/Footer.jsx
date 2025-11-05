"use client";

export default function Footer() {
  const handleEmailClick = () => {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track("email_click"); // Track email clicks in Umami
    }
  };

  return (
    <footer className="footer text-center py-6 text-gray-300 relative overflow-hidden">
      <p>© {new Date().getFullYear()} SetScene — All rights reserved.</p>
    <div className="mw">
      <p className="mt-2">
        Contact us:{" "}
        <a
          href="mailto:setscene0@gmail.com"
          onClick={handleEmailClick}
          className="footer-email text-blue-400 hover:text-blue-300 transition-all duration-200"
        >
          setscene0@gmail.com
        </a>
      </p>

      <div className="footer-message mt-4">
        <span className="arrow">➤</span>
        <span className="text">Send us your ideas — we’d love to hear from you!</span>
      </div>
      </div>
    </footer>
  );
}
