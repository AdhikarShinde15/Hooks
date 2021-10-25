import { useReducer, useState, useEffect } from "react";
import { notesReducer } from "../Reducers/notes";
import { NoteList } from "./NoteList";
import { AddNoteForm } from "./AddNoteForm";
import { NotesContext } from "../context/notes-context";
export const NoteApp = () => {

  // const [notes, setNotes] = useState<Array<any>>([]);
  const [notes, dispatch] = useReducer(notesReducer, [])
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notesData') || '[]');
    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes })
    }
  }, []);
  useEffect(() => {
    console.log('UseEffecte Ran');
    localStorage.setItem("notesData", JSON.stringify(notes));
  }, [notes]);

  
  return (
    <NotesContext.Provider value={{notes,dispatch}}>
      <h1>Notes</h1>
      <NoteList/>
      <p>Add Note</p>
      <AddNoteForm />
    </NotesContext.Provider>
  )
}
