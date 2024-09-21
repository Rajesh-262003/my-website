import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/notes')
            .then(response => {
                setNotes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="App">
            <Header />
            <NoteForm notes={notes} setNotes={setNotes} />
            <div className="notes">
                {notes.map((note, index) => (
                    <div key={index} className="note">
                        <h2>{note.title}</h2>
                        <img src={note.imgUrl} alt={note.title} />
                        <p>{note.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
