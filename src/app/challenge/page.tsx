'use client';

import React, { useEffect, useState, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #e0f7fa, #ffffff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: var(--font-geist-sans, sans-serif);
  text-align: center;
`;

const Content = styled.div`
  animation: ${fadeIn} 0.6s ease-out;
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

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ChallengePage = () => {
  const [completed, setCompleted] = useState(false);
  const [quote, setQuote] = useState('');

  const challenge = {
    title: 'Gratitude Flash',
    description: "Write down 3 things you're grateful for today.",
  };

  const motivationalQuotes = useMemo(
    () => [
      'Small steps every day lead to big changes.',
      'You are doing better than you think.',
      'A grateful heart is a magnet for miracles.',
      'Peace begins with a smile.',
    ],
    []
  );

  useEffect(() => {
    if (typeof Audio !== 'undefined') {
      const audio = new Audio('/sounds/calm.mp3');
      audio.loop = true;
      audio.volume = 0.2;
      audio.play().catch((err) =>
        console.log('Audio playback error:', err)
      );

      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, []);

  useEffect(() => {
    const savedStatus = localStorage.getItem('challenge-completed');
    const savedDate = localStorage.getItem('challenge-date');
    const today = new Date().toDateString();

    if (savedDate === today && savedStatus === 'true') {
      setCompleted(true);
    }

    const randomQuote =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);
  }, [motivationalQuotes]);

    const handleComplete = () => {
      const today = new Date().toDateString();
      const savedDate = localStorage.getItem('challenge-date');
  
      if (savedDate !== today) {
        setCompleted(true);
        localStorage.setItem('challenge-completed', 'true');
        localStorage.setItem('challenge-date', today);
      }
    };
  
    return (
      <Wrapper>
        <Content>
          <Title>{challenge.title}</Title>
          <Description>{challenge.description}</Description>
          <Quote>{quote}</Quote>
          <Button onClick={handleComplete} disabled={completed}>
            {completed ? 'Completed for Today' : 'Complete Challenge'}
          </Button>
        </Content>
      </Wrapper>
    );
  };
  
  export default ChallengePage;
