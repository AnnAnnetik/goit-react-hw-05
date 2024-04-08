// // src/components/App.jsx

import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from '../pages/HomePage/HomePage';
// import MoviesPage from '../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/movies" element={<MoviesPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
