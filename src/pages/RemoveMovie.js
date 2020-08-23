import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios'
import '../components/RemoveMovie.css'
class RemoveMovie extends Component{
  constructor()
  {
    super();
    this.state={
      movie_id:''
    }
  }

  onChangedId=(event)=>{
    this.setState({
      movie_id:event.target.value
    })
  }

    onSubmitHandler=(event)=>{
        event.preventDefault();
        const movie_id=this.state.movie_id
        axios.delete('http://localhost:8080/online-ticket/b1/movie/' + movie_id)
        .then(resp =>{
          console.log(resp)
          alert('Movie removed Successfully!!')
        })
        .catch(error=>{
          console.log(error)
          alert('Something went wrong!')
        })
    }

    render()
    {
       return(
           <div>
                <nav id="remove-link" className="navbar navbar-expand-lg navbar-light bg-info ">
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

           
           <div class="card container mt-5 fit-card ">
                    <h5 class="card-header">Remove Movie</h5>
                    <div class="card-body">
                    <form onSubmit={this.onSubmitHandler.bind(this)}>
                            
                            <div class="form-group">
                              <label>Movie Id</label>
                              <input value={this.state.movie_id} onChange={this.onChangedId} type="text" class="form-control" placeholder="Enter Movie Id"></input>
                            </div>
          
                            <button type="submit" class="btn btn-danger w-50 mx-auto d-block">Remove<i class="fa fa-trash ml-3" aria-hidden="true"></i></button>
                  </form>
                    </div>
                  </div>
           
           
           </div>
       );
    }
}

export default RemoveMovie;