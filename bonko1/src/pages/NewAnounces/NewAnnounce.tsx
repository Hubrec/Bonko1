import './NewAnnounce.css';
import { useState } from 'react';

function NewAnnounce() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const sendAnnounce = (e: any) => {
        e.preventDefault();
        
        fetch('http://localhost:3333/api/announcement/create', {
            method: 'POST',
            body: JSON.stringify({
                "authorId": 1,
                "title": title,
                "description": description
            }),
        })
    }

    return (
        <div className="new-announce">
            <div className="form">
                <form>
                    <h1>New Announce form</h1>
                    <label htmlFor="title">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" id="title" name="title" />

                    <label htmlFor="description">Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} rows={5} cols={50} id="description" name="description" />

                    <button type="submit" onClick={sendAnnounce}  >Create</button>
                </form>
            </div>
        </div>
    );

}

export default NewAnnounce;