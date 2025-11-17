import {useReducer, useState} from "react";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList.jsx";
import {useImmerReducer} from "use-immer";
import {NoteContext, NotesDispatchContext} from "./NoteContext.jsx";

let id = 0;
const initialNotes = [
    {id: id++, text: "Learn HTML", done: false},
    {id: id++, text: "Learn CSS", done: true},
    {id: id++, text: "Learn JavaScript", done: false},
    {id: id++, text: "Learn ReactJS", done: false},
]


function notesReducer(notes, action){
    if (action.type === "ADD_NOTE") {
        notes.push({
            id: id++,
            text: action.text,
            done: false
        });
    }else if(action.type === "CHANGE_NOTE"){
        const index = notes.findIndex(note => note.id === action.id);
        notes[index].text = action.text;
        notes[index].done = action.done;
    }else if(action.type === "DELETE_NOTE"){
        const index = notes.findIndex(note => note.id === action.id);
        notes.splice(index, 1);
    }
    // switch (action.type) {
    //     case "ADD_NOTE":
    //         return  [...notes, {
    //             id: ++id,
    //             text: action.text,
    //             done: false
    //         }];
    //     case "CHANGE_NOTE":
    //         return  notes.map(note => note.id === action.id ? {...note, ...action} : note);
    //     case "DELETE_NOTE":
    //         return notes.filter(note => note.id !== action.id);
    //     default:
    //         return notes;
    // }
}

export default function NoteApp(){
    // const [notes, setNotes] = useState(initialNotes);
    // const [notes, dispatch] = useReducer(notesReducer, initialNotes);
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

    return (
        <div>
            <NoteContext.Provider value={notes}>
                <NotesDispatchContext.Provider value={dispatch}>
                    <h1>Note App</h1>
                    <NoteForm/>
                    <NoteList/>
                </NotesDispatchContext.Provider>
            </NoteContext.Provider>
        </div>
    )
}