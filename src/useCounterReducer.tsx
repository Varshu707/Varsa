import { useReducer } from "react"; 

const intialState=(initial) => ({
      count:initial,

})
function counterReducer(state,action){
      switch(action.type){
            case 'INCREMENT':
                  return{count:state.count+1};
            case 'DECREMENT':
                  return{count:state.count-1};
            case 'RESET':
                  return intialState(action.payload);
            default:
                  return state;

      }
}
export default function
useCounterReducer(initialValue =0){
      const[state,dispatch]=
      useReducer(counterReducer,initialValue,intialState);
      const increment= () =>dispatch({type:'INCERMENT'});
      const decrement =() =>dispatch({type:'DECREMENT'});
      const reset =() =>
            dispatch({type:'RESET',payload:initialValue});
      return{
            count:state.count,
            increment,
            decrement,
            reset,
      };
}