"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaThumbsUp, FaThumbsDown, FaArrowLeft } from "react-icons/fa";


export default function DemoPage() {
  const [feedback, setFeedback] = useState(null);
  const router = useRouter();

  const handleFeedback = (type) => {
    setFeedback(type);
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track(`demo_feedback_${type}`);
    }
  };

  const handleBack = () => {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track("demo_back_click");
    }
    router.push("/");
  };

  return (
    <main className="demo-page">
      {/* Back Button */}
      <button onClick={handleBack} className="back-button">
        <FaArrowLeft /> Back
      </button>

      {/* Title */}
      <h1 className="demo-title">Demo: Step Into the Scene</h1>

      {/* Subtitle */}
      <p className="demo-subtitle">
        Experience a sample VR library environment powered by <strong>Set Scene</strong> — 
        where imagination meets immersive learning.
      </p>

      {/* Demo Video */}
<div className="demo-video-wrapper">
  <iframe
    className="demo-video"
    src="https://drive.google.com/file/d/1WUoC_qKOTV0sQkpKFnRDMSFyU5MCpjw6/preview"
    title="Set Scene Demo"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>


      {/* Feedback Section */}
      <div className="feedback-buttons">
        <button
          onClick={() => handleFeedback("thumbs_up")}
          className={`feedback-button thumbs-up ${feedback === "thumbs_up" ? "active" : ""}`}
        >
          <FaThumbsUp className="icon" /> Like
        </button>

        <button
          onClick={() => handleFeedback("thumbs_down")}
          className={`feedback-button thumbs-down ${feedback === "thumbs_down" ? "active" : ""}`}
        >
          <FaThumbsDown className="icon" /> Dislike
        </button>
      </div>

      {/* Feedback Message */}
      {feedback && (
        <p className="feedback-message">
          Thanks for your feedback —{" "}
          <span className={feedback === "thumbs_up" ? "positive" : "negative"}>
            {feedback === "thumbs_up" ? "You liked it!" : "We’ll improve it!"}
          </span>
        </p>
      )}
    </main>
  );
}
