"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import DailyChallenge from "../../components/DailyChallenge";

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #d0f0f6, #ffffff);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  font-family: var(--font-geist-sans);
`;

const Header = styled.header`
  text-align: center;
  margin-top: 2rem;
`;

const AppTitle = styled.h1`
  font-size: 2.5rem;
  color: #007c91;
  margin-bottom: 0.5rem;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const Footer = styled.footer`
  margin-top: 3rem;
  font-size: 0.9rem;
  color: #888;
  text-align: center;
`;

const challenges = [
  {
    title: "Gratitude Flash",
    description: "Write down 3 things you're grateful for today.",
  },
  {
    title: "Mindful Minute",
    description: "Take 60 seconds to focus only on your breath.",
  },
  {
    title: "Positive Ping",
    description: "Send a kind message to someone randomly today.",
  },
  {
    title: "Nature Break",
    description: "Step outside and name 5 things you can see or hear.",
  },
  {
    title: "Joy Journal",
    description: "Write down 1 moment today that made you smile.",
  },
];

// Moved outside the component to avoid redefinition on every render
const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export default function Home() {
  const router = useRouter();
  const [streak, setStreak] = useState(0);

  const handleStart = () => {
    router.push("/challenge");
  };

  // Get today's challenge based on day-of-year
  const todayChallenge = challenges[getDayOfYear() % challenges.length];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const today = new Date().toDateString();
      const lastDate = localStorage.getItem("lastChallengeDate");
      const storedStreak = parseInt(localStorage.getItem("streakCount") || "0");

      if (lastDate === today) {
        setStreak(storedStreak); // already played today
      } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastDate === yesterday.toDateString()) {
          const newStreak = storedStreak + 1;
          setStreak(newStreak);
          localStorage.setItem("streakCount", newStreak.toString());
        } else {
          setStreak(1); // reset
          localStorage.setItem("streakCount", "1");
        }

        localStorage.setItem("lastChallengeDate", today);
      }
    }
  }, []);

  return (
    <Wrapper>
      <Header>
        <AppTitle>Mood Booster 🌿</AppTitle>
        <Tagline>Your daily dose of feel-good challenges</Tagline>
      </Header>

      <DailyChallenge
        title={todayChallenge.title}
        description={todayChallenge.description}
        onStart={handleStart}
        streakCount={streak}
      />

      <Footer>
        Built by <a href="mailto:stephenoyelabi@gmail.com">Stephen Oyelabi</a> with ❤️ for your peace of mind
      </Footer>
    </Wrapper>
  );
}