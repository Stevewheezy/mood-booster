"use client";

import styled from "styled-components";

export const ChallengeWrapper = styled.div`
  background: linear-gradient(to right, #e0f7fa, #ffffff);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 2rem auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

export const Emoji = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Streak = styled.div`
  margin: 1rem 0;
  font-weight: bold;
  color: #ff5722;
`;

export const Button = styled.button`
  background: #00acc1;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #007c91;
  }
`;
