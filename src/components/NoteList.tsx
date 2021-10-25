import { useContext } from "react";
import { NotesContext } from "../context/notes-context";
import { Note } from "./Note";

export const NoteList = () => {
     const { notes } = useContext(NotesContext)
       return notes.map((note : any) => (
          <Note key={note.title} note={note}/>
        ))
     
}