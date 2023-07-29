import React, {useState} from 'react'


export default function TextForm(props) {
  // one fn is remaining which will remove extra spaces from text, but uses regex(regular expression) so will come after js course of harry 
  const handleCopy=()=>{
    let TextField = document.getElementById('box');
    // TextField = document.getElementById('box').innerText;
    // TextField.select()
    navigator.clipboard.writeText(TextField.value);
  }

  const handleClearClick=()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success")
  }
  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    // let newText = text.toString(); // make sense ?
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  }
  const handleUpClick=()=>{
    // console.log("uppercase was clicked " + text);
    let newText = text.toUpperCase();
    props.showAlert("Converted to Uppercase", "success")
    setText(newText);
  }
  
  const handleOnChange=(event)=>{
    // console.log("on Change");
    setText(event.target.value);

  }
  const [text, setText] = useState('');
  return (
    <>
    <div>
  <div className="form-group">
    <h1>{props.heading}</h1>
    {/* <label for="exampleFormControlTextarea1">Textarea</label> */}
    <textarea className="form-control" value = {text}  onChange={handleOnChange} id="box" rows="8"></textarea>
  </div>
    <button className="btn btn-primary  mx-1 my-2" onClick={handleUpClick} >ChangeToUpCase</button>
    <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick} >ChangeToLowerCase</button>
    <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick} >Clear Text Box</button>
    <button className="btn btn-primary mx-1 my-2" onClick={handleCopy} >Copy Text</button>
    </div> 
    <div className="container my-3" >
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
      <h3>Preview</h3>
      <h4>{text.length>0 ? text:"Enter something in above textarea to preview here"}</h4>
    </div>
    </>
  )
}


// import React, {useState} from 'react'


// export default function TextForm(props) {
//   const handleLoClick=()=>{
//     let newText = text.toLowerCase();
//     setText(newText);
//   }

//   const handleOnChange=(event)=>{
//     setText(event.target.value)
//   }
//   const [text, setText] = useState('fhuesfdb');
//   return (
//     <div>
//       <div className="form-group">
//         <h1>{props.heading }</h1>
//         {/* <label for="exampleFormControlTextarea1">Textarea</label> */}
//         <textarea className="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
//       </div>
//         <button className="btn btn-primary" onClick={handleLoClick} >ChangeToUpCase</button>

//     </div>
//   )
// }
