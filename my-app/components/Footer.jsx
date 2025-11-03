"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} SetScene — All rights reserved.
      </p>
      <p>
        Contact us:{" "}
        <a href="mailto:setscene0@gmail.com" className="footer-email">
          setscene0@gmail.com
        </a>
      </p>
    </footer>
  );
}
