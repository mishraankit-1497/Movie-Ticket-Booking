import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import '../components/GetCustomer.css';

function GetCustomer(){
  const [cust_array,setCustomer]=useState(null)
  const apiUrl='http://localhost:8080/online-ticket/b1/customer'
  function fetchCustomers(){
  fetch(apiUrl)
  .then(resp => resp.json())
  .then(data=>{
    console.log(data)
    setCustomer(data);
  })
}
    
       return(
           <div>
               <nav id="getcust-link" className="navbar navbar-expand-lg navbar-light bg-info ">
  <a className="navbar-brand" href="#"><i className="fas fa-film"></i>  ShaantiCinema</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/BookTicket">BookTicket</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/CancelTicket">CancelTicket</NavLink>
      </li>
      <li className="nav-item dropdown active">
        
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Movie
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink class="dropdown-item" to="/AddMovie">Add</NavLink>
          <NavLink class="dropdown-item" to="/RemoveMovie">Remove</NavLink>
         </div>   
      </li>
      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Get List
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink class="dropdown-item" to="/CustomerList">Customers</NavLink>
          <NavLink class="dropdown-item" to="/MovieList">Movies</NavLink>
         </div> 
      </li>  
    </ul>
  </div>
</nav>


                <div className="container">
                    <button onClick={fetchCustomers} className="btn btn-success adjust mt-5 mx-auto d-block w-25">Get Customer List</button>
                </div>


          <div className="container">
           
         
          <table class="table  table-primary mb-0 mt-5" > 
          <thead> 
                    <tr>
                      <th scope="col" class="pr-0 pl-2">Customer_id</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Age</th>
                      <th scope="col">Movie_name</th>
                    </tr>
            </thead>
            </table>
            {cust_array && cust_array.map((customer , index)=>(
                <table class="table table-primary  mb-0" key={index}>
                <tbody >
                  <tr >
                    <th scope="row" class="pl-5 ">{customer.cust_id}</th>
                    <td>{customer.first_name}</td>
                    <td>{customer.last_name}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.age}</td>
                    <td>{customer.movie_id.movie_name}</td>
                  </tr>
                </tbody>
              </table>
          ))}
          </div>

                
                                
           </div>
       );
    }


export default GetCustomer;