import React from 'react';
import JSConfetti from 'js-confetti';

export default function App() {
  const [thing, setThing] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const jsConfetti = new JSConfetti();

  function submitPageOne(e) {
    e.preventDefault();
    thing
      ? setSubmitted((prevSubmitted) => !prevSubmitted)
      : alert('gotta type something!');
  }

  function submitPageTwo(e) {
    e.preventDefault();
    setSubmitted((prevSubmitted) => !prevSubmitted);
    setThing('');
    celebrate();
  }

  function celebrate() {
    jsConfetti.addConfetti({
      emojis: ['🚽', '💩', '🐍', '🌈', '🦄', '🌞'],
      emojiSize: 100,
      confettiNumber: 30,
    });
    jsConfetti.addConfetti({
      confettiRadius: 6,
      confettiNumber: 700,
    });
    const wooHoo = new Audio('./woo-hoo-82843.mp3');
    wooHoo.play();
  }

  function handleChange(e) {
    setThing((prevThing) => e.target.value);
  }

  const on = {
    display: 'flex',
  };

  const off = {
    display: 'none',
  };

  return (
    <main>
      <div style={submitted ? off : on} className="first__page">
        <h1>One Thing: </h1>
        <div className="input__container">
          <form onSubmit={submitPageOne}>
            <input
              value={thing}
              onChange={handleChange}
              type="text"
              placeholder="type your thing"
              maxLength={40}
            />
            <button>Lock it In</button>
          </form>
        </div>
      </div>

      <div style={submitted ? on : off} className="second__page">
        <h2>{thing}</h2>
        <button onClick={submitPageTwo}>
          <p>Done! ✅</p>
        </button>
      </div>

      <footer>
        <p>
          Coded by:{' '}
          <a href="https://carisaelam-social-links.netlify.app">Carisa Elam</a>
        </p>
        <p>
          Inspired by{' '}
          <span>
            <a
              href="https://www.youtube.com/watch?v=s84yXvLOoio"
              target="blank"
            >
              Coding in Public
            </a>
          </span>
        </p>
      </footer>
    </main>
  );
}
