import React, {useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import postData from '../cred.json'
import {useHistory} from 'react-router-dom'

function Login() {
    const [Uname, setUname] = useState('')
    const [Pname, setPname] = useState('')
    const [Cred,setCred] = useState([{uname : '',pname: ''}])
    //console.log(postData.password);
    //console.log(Uname);
    //console.log(Pname);
    console.log(Cred);
    let history = useHistory();
    const handlechange = (event) => {
        event.preventDefault(); 
        setCred({uname: Uname,pname : Pname})
        if(postData.username === Uname && postData.password === Pname){
            console.log('sucessfull')
            history.push('/Home',[Cred.uname,Cred.pname])
        }
        else{
            console.log('fail');
        }
    }
    
    return (
        <div className="auth-wrapper">
        
        <div className="auth-inner">
        <form onSubmit={handlechange}>
                <h3>Login In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"  onChange={(e)=> setUname(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"  onChange={(i)=> setPname(i.target.value)} className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"  className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit
                
                </button>
                <p className="forgot-password text-right">
                    Forgot password?
                </p>
            </form>
            </div>
            </div>
            
            
    )
}

export default Login
