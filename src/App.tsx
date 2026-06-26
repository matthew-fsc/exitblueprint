import { Routes, Route } from 'react-router-dom';
import Landing from './routes/Landing';
import Assessment from './routes/Assessment';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/assessment" element={<Assessment />} />
    </Routes>
  );
}
