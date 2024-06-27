// src/app/page.js
import TypingSpeed from './components/TypingSpeed';

export const metadata = {
  title: 'Typing Speed Test',
  description: 'Measure your typing speed in words per minute.',
};

const Home = () => {
  return (
    <div>
      <main>
        <TypingSpeed />
      </main>
    </div>
  );
};

export default Home;
