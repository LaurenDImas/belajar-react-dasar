import Note from "./Note.jsx";
import {useContext} from "react";
import {NoteContext} from "./NoteContext.jsx";

export default function NoteList() {
    const notes = useContext(NoteContext);
    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Note note={note} />
                </li>
            ))}
        </ul>
    )
}