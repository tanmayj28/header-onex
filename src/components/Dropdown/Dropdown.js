import { useState } from 'react';
import { Element } from "../Elements/Elements.js"
import "./Dropdown.css"
function Dropdown(props) {
  const [display, setDisplay] = useState('none')

  function handleClick() {
    if ( display == 'none' ) {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  }

  return (
      <div>
        <button onClick={() => handleClick()}>
          { props.heading }
        </button>
        { props.options.map(option => (
          <Element type="anchor" link={option.link} name={option.name} display={display} />
        )) }
      </div>
  );
}

export { Dropdown }
