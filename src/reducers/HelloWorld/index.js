import {
  INITIALACTION,
  SELECTED,
  MATRIXUPDATE,
  MATRIXINITIALACTION,
  MATRIXSELECTED,
  SELECTEDDIAMENTIONALUPDATE
} from "../../actionTypes/HelloWorld";

const initialState = [];

export default function HelloWorld(state = initialState, action) {
  switch (action.type) {
    case INITIALACTION:
      return { ...state , matrix: action.payload }
    case MATRIXINITIALACTION:
      return { ...state, matrixDiamentional: action.payload }    
    case MATRIXSELECTED :
      return { ...state, selectedDiamentional: action.payload }          
    case SELECTED:
      return { ...state , selected: action.payload }
    case SELECTEDDIAMENTIONALUPDATE:
      return { ...state, selectedDiamentional : action.payload}
    case MATRIXUPDATE:
      state.matrix.map(value => {
        if(value.id == action.meta){
          value.selected = false
          return value 
        } 
        if(value.id == action.payload){
          value.selected = true
          return value
        }
        return {
          ...value,
        };
      })
    default:
      return state;
  }
}