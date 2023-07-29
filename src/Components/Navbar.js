/* we need only fn based component so we use
 rfc
For snippet not rafce others*/
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar( props ) {
    return (
        <div>
            <h1 className="Ap">GAURANGA</h1>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.AboutTextUtils}</a>
                        </li>
                    </ul>
                    <div className="bg-primary rounded mx-2 "  onClick={()=>{props.togglebtn('primary')}} style={{cursor:'pointer',height:'30px', width:'30px'}} ></div>
                    <div className="bg-success rounded mx-2 "  onClick={()=>{props.togglebtn('success')}} style={{cursor:'pointer',height:'30px', width:'30px'}} ></div>
                    <div className="bg-danger rounded mx-2 "  onClick={()=>{props.togglebtn('danger')}} style={{cursor:'pointer',height:'30px', width:'30px'}} ></div>
                    <div className="bg-warning rounded mx-2 "  onClick={()=>{props.togglebtn('warning')}} style={{cursor:'pointer',height:'30px', width:'30px'}} ></div>
                                
                </div>
                        <div className="custom-control custom-switch">
                        <input type="checkbox" className="  custom-control-input" onClick={()=>{props.togglebtn(null)}} id="customSwitch1" />
                        <label className={`custom-control-label mx-3 ${props.mode === 'light' ? 'dark':'light'}`}  htmlFor="customSwitch1">Enable DarkMode</label>
                        </div>
            </nav>
                                {/* <div className="custom-control custom-switch">
                        <input type="checkbox" className=" custom-control-input" id="customSwitch2" />
                        <label className=" mx-2 custom-control-label" htmlFor="customSwitch2">Change to blue color</label>
                        </div> */}
        </div>
    )
}


Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    AboutTextUtils:PropTypes.string.isRequired
}


// default props

Navbar.defaultProps = {
    title : "Please Set Title Here",
    AboutTextUtils : "Set AboutTextUtils Too"
}

// both are working fine 


// import React from 'react'


// const Navbar = (props) => {
//     return (
//         <div>
//             <h1 className="Ap">GAURANGA</h1>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <a className="navbar-brand" href="#">{props.title}</a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mr-auto">
//                         <li className="nav-item active">
//                             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">About</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
//                         </li>
//                     </ul>
//                     <Form className="Form-inline my-2 my-lg-0">
//                         <input className="Form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                     </Form>
//                 </div>
//             </nav>
//         </div>
        
//     )
// }

// export default Navbar


