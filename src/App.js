import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Instructors from './components/Instructors';
import Courses from './components/Courses';
import Students from './components/Students';
import LandingPage from './components/LandingPage';
import StudentsEdit from './components/StudentsEdit';
import EditForm from './components/EditForm';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/studentsedit" element={<StudentsEdit />} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
