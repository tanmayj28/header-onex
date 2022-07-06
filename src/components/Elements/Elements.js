import { Outlet, Link } from "react-router-dom";

function Element(props) {
  switch(props.type) {
    case 'anchor':
      return(
        <Link to={props.link} style={{display:props.display}}>
          { props.name }
        </Link>
      )
    default: return(
      <div style={{display:props.display}}>
        { props.name }
      </div>
    )
  }
}

export { Element }
