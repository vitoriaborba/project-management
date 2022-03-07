import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import ProjectsList from './pages/ProjectsList/ProjectsList';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import EditProject from './pages/EditProject/EditProject';
import EditTask from './pages/EditTask/EditTask.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectsList/>} />
        <Route path="/projects/:projectId" element={<ProjectDetails/>} />
        <Route path="/projects/edit/:projectId" element={<EditProject/>} />
        <Route path="/tasks/edit/:taskId" element={<EditTask/>} />
      </Routes>
    </div>
  );
}

export default App;
