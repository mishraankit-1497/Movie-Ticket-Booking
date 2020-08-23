import React,{Component} from 'react';
import '../components/AddMovie.css'
import {NavLink} from 'react-router-dom';
import axios from 'axios'
class AddMovie extends Component{
    constructor()
    {
      super();
      this.state ={
        movie_id:'',
        movie_name:'',
        category:'',
        language:'',
        type:'',
        ticketCount:'',
        img_src:''
      }
    }

    onChangedId =(event)=>{
      this.setState({
        movie_id:event.target.value
      })
    }

    onChangedName =(event)=>{
      this.setState({
        movie_name:event.target.value
      })
    }

    onChangedCategory =(event)=>{
      this.setState({
        category:event.target.value
      })
    }

    onChangedLanguage =(event)=>{
      this.setState({
        language:event.target.value
      })
    }

    onChangedImgSrc =(event)=>{
      this.setState({
        img_src:event.target.value
      })
    }

    onChangedType =(event)=>{
      this.setState({
        type:event.target.value
      })
    }

    onChangedTicket =(event)=>{
      this.setState({
        ticketCount:event.target.value
      })
    }


    onSubmitHandler=(event)=>{
        event.preventDefault();
        let data ={
          "language": this.state.language,
          "type": this.state.type,
          "ticketCount": this.state.ticketCount,
          "movie_name": this.state.movie_name,
          "category": this.state.category,
          "img_src": this.state.img_src,
          "movie_id": this.state.movie_id
        }


        axios.post('http://localhost:8080/online-ticket/b1/movie', data)
        .then(resp => {
                  alert('Movie Added Successfully!!!')
        })
        .catch(error=>{
          alert('Something went wrong!')
        })
    }
      
    

    render()
    {
       return(
           <div>
                <nav id="addmovie-link" className="navbar navbar-expand-lg navbar-light bg-info ">
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

          

                  <div class="card container mt-5 card-fit">
                    <h5 class="card-header">Add Movie</h5>
                    <div class="card-body">
                    <form onSubmit={this.onSubmitHandler.bind(this)}>
                            
                            <div class="form-group">
                              <label>Movie Id</label>
                              <input value={this.state.movie_id} onChange={this.onChangedId} type="text" class="form-control" placeholder="Enter Movie Id"></input>
                            </div>
                            <div class="form-group">
                              <label>Movie Name</label>
                              <input value={this.state.movie_name} onChange={this.onChangedName} type="text" class="form-control" placeholder="Enter Movie Name"></input>
                            </div>
                            <div class="form-group">
                              <label>Movie Poster URL</label>
                              <input value={this.state.img_src} onChange={this.onChangedImgSrc} type="text" class="form-control" placeholder="Enter Poster URL"></input>
                            </div>
                            <div class="form-group">
                              <label>Category</label>
                              <input value={this.state.category} onChange={this.onChangedCategory} type="text" class="form-control" placeholder="Enter Movie Category"></input>
                            </div>
                            <div class="form-group">
                              <label>Language</label>
                              <input value={this.state.language} onChange={this.onChangedLanguage} type="text" class="form-control" placeholder="Enter Movie Language"></input>
                            </div>
                            <div class="form-group">
                              <label>Type</label>
                              <input value={this.state.type} onChange={this.onChangedType} type="text" class="form-control" placeholder="Enter Movie Type"></input>
                            </div>
                            <div class="form-group">
                              <label>Total Tickets</label>
                              <input value={this.state.ticketCount} onChange={this.onChangedTicket} type="text" class="form-control" placeholder="Enter Total Tickets"></input>
                            </div>
                            
                            
                            <button type="submit" class="btn btn-primary w-50 mx-auto d-block">Add<i class="fa fa-plus ml-3" aria-hidden="true"></i></button>
                  </form>
                    </div>
                  </div>


           </div>

           
       );
    }
}

export default AddMovie;