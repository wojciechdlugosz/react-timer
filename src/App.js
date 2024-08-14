import Timer from "./components/Timer/Timer";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container"
import { useEffect, useState } from 'react';

const App = () => {

  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0)

  const startTimer = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <Timer milliseconds={time} />
      <Button onClick={startTimer}>start</Button>
      <Button onClick={stopTimer}>stop</Button>
      <Button onClick={resetTimer}>reset</Button>
    </Container>
  );
}

export default App;
