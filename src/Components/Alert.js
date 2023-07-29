import React from 'react'

function Alert(props) {
    // const capitalize = (word)=>{
    //     let lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    return (
        
        <div style={{height:"50px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {/* <strong> ({capitalize (props.alert.type)}) </strong> : {props.alert.msg} */}
                <strong> {props.alert.type} </strong> : {props.alert.msg}
                {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> */}
            </div>
            }
                </div>
            
        
    )
}

export default Alert
