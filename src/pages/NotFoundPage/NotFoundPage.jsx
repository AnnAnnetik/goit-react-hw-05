import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const NotFoundPage = () => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timer === 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Page you visited doesn&apos;t exist.</h1>
      <p>Redirecting to home page in {timer} seconds...</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
