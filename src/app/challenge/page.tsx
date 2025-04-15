"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f7fdfd, #ffffff);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #007c91;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  resize: none;
  min-height: 150px;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #007c91;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #005e6e;
  }
`;

export default function ChallengePage() {
  const router = useRouter();
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    if (response.trim() !== "") {
      // Save to localStorage or Supabase in future
      alert("Challenge submitted!");
      router.push("/");
    } else {
      alert("Please complete the challenge first!");
    }
  };

  return (
    <Wrapper>
      <Title>🧠 Gratitude Challenge</Title>
      <Description>
        Take 2 minutes to reflect. Write down 3 things you are grateful for
        today.
      </Description>
      <TextArea
        placeholder="I'm grateful for..."
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Wrapper>
  );
}
