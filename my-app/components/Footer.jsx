"use client";

export default function Footer() {
  const handleEmailClick = () => {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track("email_click");
    }
  };

  const handleSocialClick = (platform) => {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track(`${platform}_click`);
    }
  };

  return (
    <footer className="footer text-center py-8 text-gray-300 relative overflow-hidden flex flex-col items-center justify-center gap-4">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} SetScene — All rights reserved.
      </p>

      <p className="text-sm sm:text-base">
        Contact us:{" "}
        <a
          href="mailto:setscene0@gmail.com"
          onClick={handleEmailClick}
          className="footer-email text-blue-400 hover:text-blue-300 transition-all duration-200"
        >
          setscene0@gmail.com
        </a>
      </p>

      <div className="social-icons flex gap-6 mt-3 justify-center">
        <a
          href="https://www.instagram.com/sets.scene"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleSocialClick("instagram")}
        >
          <img
            src="/instagram.svg"
            alt="Instagram"
                        className="so-img"
          />
        </a>

        <a
          href="https://www.tiktok.com/@sets.scene"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleSocialClick("tiktok")}
        >
          <img
            src="/tiktok.svg"
            alt="TikTok"
            className="so-img"
          />
        </a>
      </div>

      <div className="footer-message flex items-center justify-center gap-2 mt-4 animate-bounce">
        <span className="arrow text-blue-400 text-lg sm:text-xl">➤</span>
        <span className="text text-sm sm:text-base">
          Send us your ideas — we’d love to hear from you!
        </span>
      </div>
    </footer>
  );
}
