# custom-input-react-hook
Custom Input hook for react to give input validation. 
<hr> 
<h2>To use the useInput custom React hook, follow these steps:</h2>


1. Import the useInput hook from the file where it is defined:

   ```import useInput from 'path/to/file'```
   

2. In your functional component, call the `useInput` hook, passing in a validation function that takes the input value as an argument and returns a boolean indicating whether the value is valid. For example:

 ```const MyComponent = () => {
  const {
    value,
    isValid,
    hasError,
    valueInputChangeHandler,
    inputBlurHandler,
    reset
  } = useInput((value) => {
    // Validation logic goes here
    return value.length > 0;
  })
   ```
  

3. Use the `value`, `isValid`, and `hasError` properties to determine the state of the input. For example, you can use the `hasError` property to display an error message if the input is not valid:

   ```{hasError && <p>Please enter a valid value</p>}```


4. Use the `valueInputChangeHandler` and `inputBlurHandler` functions as event handlers for the input element. For example:

   ```<input value={value} onChange={valueInputChangeHandler} onBlur={inputBlurHandler}    />```


5. Use the `reset` function to reset the input to its initial state (empty value and not touched). For example:

   ```<button onClick={reset}>Reset</button>```
or
``` 
const onSubmitHandler = (e) => {
 e.preventDefault();
 resetNameInput(); // Like this if, reset: resetNameInput,
    };
```


That's it! Your input should now be properly validated using the custom `useInput` hook.
