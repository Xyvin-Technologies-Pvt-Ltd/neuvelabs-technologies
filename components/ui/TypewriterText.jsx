"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = "",
  showCursor = true,
  onComplete,
  tag = "span",
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, started, onComplete]);

  const Tag = tag;

  return (
    <Tag className={`terminal-text ${className}`}>
      {displayedText}
      {showCursor && (
        <motion.span
          className="terminal-cursor"
          animate={{ opacity: isComplete ? [1, 0] : 1 }}
          transition={isComplete ? { duration: 0.5, repeat: Infinity, repeatType: "reverse" } : {}}
        />
      )}
    </Tag>
  );
}

// Multi-line typewriter with staggered lines
export function TypewriterLines({
  lines,
  lineDelay = 500,
  typeSpeed = 30,
  className = "",
}) {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState([]);

  const handleLineComplete = () => {
    setCompletedLines((prev) => [...prev, lines[currentLine]]);
    if (currentLine < lines.length - 1) {
      setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, lineDelay);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {completedLines.map((line, index) => (
        <div key={index} className="terminal-text text-neon-green">
          <span className="text-muted mr-2">&gt;</span>
          {line}
        </div>
      ))}
      {currentLine < lines.length && (
        <div className="terminal-text text-neon-green">
          <span className="text-muted mr-2">&gt;</span>
          <TypewriterText
            text={lines[currentLine]}
            speed={typeSpeed}
            showCursor={true}
            onComplete={handleLineComplete}
          />
        </div>
      )}
    </div>
  );
}


