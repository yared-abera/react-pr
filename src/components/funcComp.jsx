import React from 'react'

/**
 * This is a functional component.
 *
 * A functional component is a function that takes props and returns JSX.
 *
 * The props are the inputs to the component, and the JSX is the output.
 *
 * In this case, the component takes no props and returns a JSX element
 * that contains a single <h1> heading with the text "Hello am func component".
 */
const funcComp = (/* props */) => {
  return (
    <div>
      <h1>Hello am func component</h1>
    </div>
  );
};

export default funcComp
