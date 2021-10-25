import { useContext, useState } from "react";
import { NotesContext } from "../context/notes-context";
export const AddNoteForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const {dispatch} = useContext(NotesContext)
    const addnote = (e: any) => {
        e.preventDefault();
        dispatch({ type: 'ADD_NOTE', title, body })
        setTitle('');
        setBody('');
      }

    return <form onSubmit={addnote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={body} onChange={(e) => setBody(e.target.value)} />
        <button>Add Note</button>
    </form>
}