import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom';

import axios from 'axios'

function AddTask(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {projectId} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {title, description, projectId}
        
        axios.post(`${process.env.REACT_APP_API_URL}/tasks`, body)
        .then((response) => {
            setTitle('');
            setDescription('');
            props.refreshTasks();
        })
        .catch((err) => console.log(err));
    }

  return (
    <div>
        <h2>Add task</h2>
         <form onSubmit={handleSubmit}>
            <label htmlFor="title">Tilte</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button type="submit">Add Task</button>
        </form>
    </div>
  )
}

export default AddTask