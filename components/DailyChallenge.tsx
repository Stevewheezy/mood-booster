"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ChallengeWrapper,
  Title,
  Description,
  Button,
  Emoji,
  Streak,
} from "../styles/DailyChallenge.styled";

interface Props {
  title: string;
  description: string;
  onStart: () => void;
  streakCount?: number;
}

const DailyChallenge = ({ title, description, onStart, streakCount }: Props) => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ChallengeWrapper>
            <Emoji>🌞</Emoji>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button onClick={onStart}>Start Challenge</Button>
            {streakCount !== undefined && <Streak>🔥 {streakCount}</Streak>}
          </ChallengeWrapper>
                </motion.div>
              );
        };
        export default DailyChallenge;
