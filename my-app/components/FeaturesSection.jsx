"use client";
import { FaVrCardboard, FaBookOpen, FaGlobeAmericas, FaHeadset } from "react-icons/fa";

const features = [
  { title: "Immersive VR", text: "Step inside your favorite stories.", icon: <FaVrCardboard /> },
  { title: "Virtual Libraries", text: "Explore curated book collections.", icon: <FaBookOpen /> },
  { title: "Interactive Scenes", text: "Engage with story environments.", icon: <FaHeadset /> },
  { title: "Accessible Anywhere", text: "Compatible with most VR devices.", icon: <FaGlobeAmericas /> },
];

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <h2 className="section-title">Features</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-text">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
