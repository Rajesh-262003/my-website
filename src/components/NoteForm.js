import React, { useState } from 'react';
import axios from 'axios';
import './NoteForm.css';

function NoteForm({ notes, setNotes }) {
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = { title, imgUrl, description };
        axios.post('http://localhost:5000/notes/add', newNote)
            .then(response => {
                setNotes([...notes, newNote]);
                setTitle('');
                setImgUrl('');
                setDescription('');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="note-form-container">
            <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXfLq54rJVS_5IvhpzgFXbc7QN9PcK-pwww&s" alt="Left" className="side-image" />
            </div>
            <div className="form-wrapper">
                <h2>Input Your Memories</h2>
                <form onSubmit={handleSubmit} className="note-form">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        required
                    />
                    <input
                        type="text"
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                        placeholder="Image URL"
                        required
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        required
                    ></textarea>
                    <button type="submit">Add</button>
                </form>
            </div>
            <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXfLq54rJVS_5IvhpzgFXbc7QN9PcK-pwww&s" alt="Right" className="side-image" />
            </div>
        </div>
    );
}

export default NoteForm;
