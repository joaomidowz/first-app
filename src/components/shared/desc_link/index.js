import React, {Fragment} from "react"; 



const Desc_link = (props) => {
  if(!props.desc)
  return null
  
  if(props.link){
    return (
      <Fragment>
          <p>{props.desc}</p>
          <p><a href={props.link}>{props.link}</a></p>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
          <p><u>{props.desc}</u></p>
      </Fragment>
    )
  }
  
}

export default Desc_link 