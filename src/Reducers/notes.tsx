export const notesReducer = (state: any, action: any
    ) => {
    switch(action.type) {
      case 'POPULATE_NOTES':
          return action.notes
      case 'ADD_NOTE':
          return([
            ...state,{
              // ...action
              title: action.title,
              body: action.body
            }
          ])  
      case 'REMOVE_NOTE':
          return state.filter((note : any) => note.title !== action.title) 
      default:
        return state
    }
  }
  