import React,{useContext} from 'react'
import ListContext from '../Context/Context'
import './Viewcustomer.css'

function Viewcustomer(props) {
    const [List] = useContext(ListContext)
    console.log(List);
    return (
        
        <div className="auth-inn">
            <h1>Customer Details</h1>
             <p>total no of Customer : {List.length}</p>
             <tr key={List.id}>
             {List.map(users => {
                 return(
                    <table>
                    <tr>
                      <th>Customer-ID</th>
                      <th>Customer Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                    <tr>
                      <td>{users.id}</td>
                      <td>{users.firstName}</td>
                      <td>{users.email}</td>
                      <td>{users.phone}</td>
                      <td><button>Update</button></td>
                      <td><button>Delete</button></td>
                      
                    </tr>
                   
                  </table>
             )})};
                    
                    
             
                </tr>
         </div>
        
    )
}

export default Viewcustomer
