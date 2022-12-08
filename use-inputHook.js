import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
}
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') return { value: action.value, isTouched: state.isTouched }
  if (action.type === 'BLUR') return { value: action.value, isTouched: true}
  if (action.type === 'RESET') return { isTouched: false, value: ''}
  return inputStateReducer;
};

const useInput = (validateValue) => {

 const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

  //useReducer 
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

// Check for every input change
   const valueInputChangeHandler = (e) => {
    dispatch({type: 'INPUT', value: e.target.value});
  }
// check if input was focussed
  const inputBlurHandler = (e) => {
    dispatch({type: 'BLUR', });
  }
  // reset 
  const reset = () => {
    dispatch({type: 'RESET'})
  };

// Return values to the component. 
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError, 
    valueInputChangeHandler, 
    inputBlurHandler,
    reset
  }
}

export default useInput;