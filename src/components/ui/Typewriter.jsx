import { useEffect, useState } from "react";
import "./Typewriter.css";

function Typewriter({
  phrases,
  typeSpeed = 60,
  deleteSpeed = 35,
  pauseTime = 1800,
  startDelay = 400,
}) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    let timeout;

    // Initial delay
    if (!displayedText && !isDeleting && phraseIndex === 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, 1));
      }, startDelay);

      return () => clearTimeout(timeout);
    }

    // Typing
    if (!isDeleting && displayedText.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayedText(
          currentPhrase.slice(0, displayedText.length + 1)
        );
      }, typeSpeed);

      return () => clearTimeout(timeout);
    }

    // Pause after completely typing phrase
    if (!isDeleting && displayedText.length === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

      return () => clearTimeout(timeout);
    }

    // Deleting
    if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(
          currentPhrase.slice(0, displayedText.length - 1)
        );
      }, deleteSpeed);

      return () => clearTimeout(timeout);
    }

    // Move to next phrase
    if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((current) => (current + 1) % phrases.length);
    }
  }, [
    displayedText,
    isDeleting,
    phraseIndex,
    phrases,
    typeSpeed,
    deleteSpeed,
    pauseTime,
    startDelay,
  ]);

  return (
    <span className="typewriter">
      {displayedText}
      <span className="typewriter__cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}

export default Typewriter;