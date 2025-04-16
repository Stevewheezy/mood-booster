"use client";

import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #e0f7fa, #ffffff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: var(--font-geist-sans);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #00796b;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin-top: 1rem;
`;

const Quote = styled.p`
  font-style: italic;
  color: #777;
  margin-top: 2rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  background-color: #007c91;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #005f6b;
  }
`;

const ChallengePage = () => {
  const [completed, setCompleted] = useState(false);
  const [quote, setQuote] = useState("");
  const [audio] = useState(
    typeof Audio !== "undefined" ? new Audio("/sounds/calm.mp3") : null
  );
  const challenge = {
    title: "Gratitude Flash",
    description: "Write down 3 things you're grateful for today.",
  };

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.volume = 0.2;
      audio.play().catch((error) => console.log("Audio playback error:", error));
    }
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  const motivationalQuotes = useMemo(
    () => [
      "Small steps every day lead to big changes.",
      "You are doing better than you think.",
      "A grateful heart is a magnet for miracles.",
      "Peace begins with a smile.",
    ],
    []
  );

  useEffect(() => {
    const savedStatus = localStorage.getItem("challenge-completed");
    const savedDate = localStorage.getItem("challenge-date");
    const today = new Date().toDateString();

    if (savedDate === today && savedStatus === "true") {
      setCompleted(true);
    }

    // Select a random quote
    const randomQuote =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);

    return () => {};
  }, [motivationalQuotes]);

  const handleComplete = () => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem("challenge-date");

    if (savedDate !== today) {
      const streak = parseInt(localStorage.getItem("streak") || "0", 10);
      localStorage.setItem("streak", (streak + 1).toString());
    }

    localStorage.setItem("challenge-completed", "true");
    localStorage.setItem("challenge-date", today);

    setCompleted(true);

    if (typeof window !== "undefined") {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>{challenge.title}</Title>
        <Description>{challenge.description}</Description>
        {completed ? (
          <Button disabled>✅ Completed</Button>
        ) : (
          <Button onClick={handleComplete}>Mark as Done</Button>
        )}
        <Quote>💬 {quote}</Quote>
      </motion.div>
    </Wrapper>
  );
};

export default ChallengePage;