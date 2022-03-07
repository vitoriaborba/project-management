import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState('');
  const { taskId } = useParams();

  const navigate = useNavigate();

  const deleteTask = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${taskId}`)
    .then(() => navigate(`/projects/${project._id}`))
  }
  const fetchTask = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/tasks/${taskId}`);
      let { title, description, project } = response.data;
      setTitle(title);
      setDescription(description);
      setProject(project)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchProjects = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
      setProject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, description, project};

    axios
      .put(`${process.env.REACT_APP_API_URL}/tasks/${taskId}`, body)
      .then((response) => {
        setTitle('');
        setDescription('');
        navigate(`/projects/${project._id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit Task</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Edit Task</button>
        
      </form>
      <button onClick={deleteTask}>Delete Task</button>
    </div>
  );
}

export default EditProject;