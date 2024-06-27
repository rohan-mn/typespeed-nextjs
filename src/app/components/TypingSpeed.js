// components/TypingSpeed.js
"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

import '../globals.css';

const TypingSpeed = () => {
  const [text, setText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);

  useEffect(() => {
    fetchRandomParagraph();
  }, []);

  useEffect(() => {
    if (text.length === 1) {
      setStartTime(Date.now());
    }

    if (text.length > 1 && correctChars > 0) {
      const elapsedTime = (Date.now() - startTime) / 60000; // elapsedTime in minutes
      setTypingSpeed((correctChars / elapsedTime));
    }
  }, [text, correctChars]);

  const fetchRandomParagraph = async () => {
    try {
      const response = await axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=1');
      setTargetText(response.data[0]);
    } catch (error) {
      console.error('Error fetching paragraph:', error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    // Calculate number of correct characters
    let correctCount = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === targetText[i]) {
        correctCount++;
      } else {
        break;
      }
    }
    setCorrectChars(correctCount);
  };

  const highlightText = () => {
    let highlightedText = '';
    for (let i = 0; i < targetText.length; i++) {
      if (text[i] === targetText[i]) {
        highlightedText += `<span class="correct">${targetText[i]}</span>`;
      } else {
        highlightedText += `<span class="incorrect">${targetText[i]}</span>`;
      }
    }
    return highlightedText;
  };

  return (
    <div className="container">
      <div className="paragraph-display" dangerouslySetInnerHTML={{ __html: highlightText() }}></div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing the text above..."
        rows="10"
        cols="50"
      />
      <div className="typing-speed">
        <p>Typing Speed: {typingSpeed.toFixed(2)} characters per minute</p>
      </div>
      <footer style={{ textAlign: 'center', marginTop: '20px' }} className="footer">
        Made by Rohan Menon
      </footer>
    </div>
  );
};

export default TypingSpeed;
