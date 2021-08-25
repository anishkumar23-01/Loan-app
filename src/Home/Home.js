import React, { useState, useContext} from 'react'
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ListContext from '../Context/Context'
import { BrowserRouter as Router} from "react-router-dom";
import uuid from 'react-uuid'

function Home(props) {
  
    const idd = uuid
    const [List, setList] = useContext(ListContext)
    
    const [state, setState] = useState({
        id : {idd},
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: ''
      })
      

      const handleChange = (e) => {
        setState((prev,id) =>({   
          ...prev,
          [e.target.name] : e.target.value
        }))
      }
      const onclick =(i) =>{
        i.preventDefault()
        
        //const value = e.target.value;
        setList(previos=>([...previos,
         state]
         ))}
      console.log(state)
      console.log(List);
    return (
      
        <Router>
    <div className="auth-inn">
    <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <header className="card-header">
          <h4 className="card-title mt-2">Add Customer</h4>
        </header>
        <article className="card-body">
            <form onSubmit={onclick} >
            
            <div className="form-row">
            <div className="form-group ">
              <div className="col form-group">
                <label>First name </label>
                <input 
                type="text" 
                name="firstName" 
                value={state.firstName}
                onChange={handleChange}
                className="form-control" placeholder="" />
              </div>
              <div className="col form-group">
                <label>Last name</label>
                <input 
                type="text" 
                name="lastName" 
                value={state.lastName} 
                onChange={handleChange} 
                className="form-control" 
                placeholder=" " />
              </div>
              </div>
              </div>
            
            <div className="form-group">
            
              <label>Email address</label>
              <input
                type="email"
                name="email" value={state.email}
                onChange={handleChange}
                className="form-control"
                placeholder="example@gmail.com"
              />
              <small className="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
              
            </div>

            <div className="form-row">
              
                <label>Address</label>
                <input
                  type="text"
                  name="address" 
                  value={state.address}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="House name"
                />
              
              
            </div>
            
            <div className="form-row">
              
                <label>Phone</label>
                <input
                  type="number"
                  name="phone" 
                  value={state.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Phone 1"
                />
              
              
              
            </div>
            
            <div className="form-group">
            
              <button type="submit" className="btn btn-primary btn-block">
                Add
              </button>
              
              
            </div>
            
           
            <small className="text-muted"></small>
            
          </form>
          
          
          </article>
          </div>
          </div>
          </div>
          </div>
          </Router>
    )
}

export default Home
