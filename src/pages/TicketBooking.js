import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import '../components/TicketBooking.css';
class TicketBooking extends Component{
  constructor()
  {
    super();
    this.state ={
      cust_id:'',
      first_name:'',
      last_name:'',
      gender:'',
      age:'',
      movie_id:''
  
    }
  }

  onChangedId =(event)=>{
    this.setState({
      cust_id:event.target.value
    })
  }

  onChangedFirstName =(event)=>{
    this.setState({
      first_name:event.target.value
    })
  }
  onChangedLastName =(event)=>{
    this.setState({
      last_name:event.target.value
    })
  }


  onChangedGender =(event)=>{
    this.setState({
        gender:event.target.value
    })
  }

  onChangedAge =(event)=>{
    this.setState({
      age:event.target.value
    })
  }

  onChangedMovieId=(event)=>{
    this.setState({
      movie_id:event.target.value
    })
  }
 
  onSubmitHandler=(event)=>{

    event.preventDefault();
    const id=this.state.movie_id;
    
    axios.put('http://localhost:8080/online-ticket/b1/movie/book/'+id)
    .then(resp=>{
      console.log(resp)
      console.log('TicketCount Updated')
    })
    .catch(error =>{
      console.log(error)
      alert('Something went wrong while updating!!')
    })


    let data={
      "movie_id":{
                  "movie_id":this.state.movie_id
      },
      "first_name":this.state.first_name,
      "last_name":this.state.last_name,
      "gender":this.state.gender,
      "cust_id":this.state.cust_id,
      "age":this.state.age
    }
    axios.post('http://localhost:8080/online-ticket/b1/customer',data)
    .then(resp =>{
      console.log(resp)
     alert('Ticket Booked Successfully')
    
    })
    .catch(error=>{
      console.log(error)
      alert('Something went wrong while booking ')
    })
  }

 
    render()
    {
        return(
            <div>
         <nav id="book-link" className="navbar navbar-expand-lg navbar-light bg-info ">
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

           
           
           <div class="card container mt-5 adjust-card">
                    <h5 class="card-header">Ticket Booking</h5>
                    <div class="card-body">
                    <form onSubmit={this.onSubmitHandler.bind(this)}>
                                  <div class="form-group">
                                    <label>Customer Id</label>
                                    <input value={this.state.cust_id} onChange={this.onChangedId} type="text" class="form-control" placeholder="Enter Customer Id"></input>
                                  </div>
                                  <div class="form-group">
                                    <label>Movie Id</label>
                                    <input value={this.state.movie_id} onChange={this.onChangedMovieId} type="text" class="form-control" placeholder="Enter Movie Id"></input>
                                  </div>
                                  <div class="form-group">
                                    <label>First Name</label>
                                    <input value={this.state.first_name} onChange={this.onChangedFirstName} type="text" class="form-control" placeholder="Enter First Name"></input>
                                  </div>
                                  <div class="form-group">
                                    <label>Last Name</label>
                                    <input value={this.state.last_name} onChange={this.onChangedLastName} type="text" class="form-control" placeholder="Enter Last Name"></input>
                                  </div>
                                  <div class="form-group">
                                    <label>Gender</label>
                                    <input value={this.state.gender} onChange={this.onChangedGender} type="text" class="form-control" placeholder="Enter Gender (M/F/Other)"></input>
                                  </div>
                                  <div class="form-group">
                                    <label>Age</label>
                                    <input value={this.state.age} onChange={this.onChangedAge} type="text" class="form-control" placeholder="Enter Age"></input>
                                  </div>
                                           
                          <button  type="submit" class="btn btn-success w-50 mx-auto d-block">Book Now<i class="fa fa-paw ml-3" aria-hidden="true"></i></button>
                  </form>
                    </div>
                  </div>
           
             
           
            </div>
        );
    }
}
export default TicketBooking;