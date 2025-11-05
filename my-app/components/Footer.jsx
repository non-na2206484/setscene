"use client";

export default function Footer() {
  const handleEmailClick = () => {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track("email_click"); // Track email clicks in Umami
    }
  };

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} SetScene — All rights reserved.</p>
      <p>
        Contact us:{" "}
        <a
          href="mailto:setscene0@gmail.com"
          onClick={handleEmailClick}
          className="footer-email"
        >
          setscene0@gmail.com
        </a>
      </p>
    </footer>
  );
}
