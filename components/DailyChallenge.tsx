'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation using CSS keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components
const ChallengeWrapper = styled.div`
  animation: ${fadeInUp} 0.7s ease-out;
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  max-width: 480px;
  margin: auto;
  text-align: center;
`;

const Emoji = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  color: #00796b;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  background-color: #007c91;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #005f6b;
  }
`;

const Streak = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  color: #f57c00;
`;

interface Props {
  title: string;
  description: string;
  onStart: () => void;
  streakCount?: number;
}

const DailyChallenge = ({ title, description, onStart, streakCount }: Props) => {
  return (
    <ChallengeWrapper>
      <Emoji>🌞</Emoji>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button onClick={onStart}>Start Challenge</Button>
      {streakCount !== undefined && <Streak>🔥 {streakCount}</Streak>}
    </ChallengeWrapper>
  );
};

export default DailyChallenge;
