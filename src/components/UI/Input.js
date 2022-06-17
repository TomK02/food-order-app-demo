import React from 'react';
import classes from './Input.module.css';

// React.forwardRef is a method that allows parent components pass down (i.e., “forward”) refs to their children. Using forwardRef in React gives the child component a reference to a DOM element created by its parent component. This then allows the child to read and modify that element anywhere it is being used
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>
        {props.label}
        <input
          ref={ref}
          /*The spread operator ensures that all key value pairs in this input object are added as props to input */
          {...props.input}
        />
      </label>
    </div>
  );
});

export default Input;
