import { useContext } from "react"
import { NotesContext } from "../context/notes-context"
import { notesReducer } from "../Reducers/notes";

export const Note = (props: any) => {
  const { dispatch } = useContext(NotesContext);
  const removeNote = (title: string) => {
    dispatch({ type: 'REMOVE_NOTE', title })
  }
    return (
      <div key={props.note.title}>
              <h3>{props.note.title}</h3>
              <p>{props.note.body}</p>
              <button onClick={() => dispatch({ type : 'REMOVE_NOTE' , title: props.note.title})}>X</button>
            </div>
    )
  }