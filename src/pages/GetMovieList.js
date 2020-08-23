import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import '../components/MovieCards.css'
// import MovieCards from './MovieCards';
function GetMovieList() {

     
     const [movie_array,setMovie]= useState(null)
      const apiUrl='http://localhost:8080/online-ticket/b1/movie'
      function fetchMovies() {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data=>{
          console.log(data)
          setMovie(data);

        })
      }



       return(
           <div>
               <nav id="movie-link" className="navbar navbar-expand-lg navbar-light bg-info ">
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


{/* Button */}
                <div className="FormCenter">
                    
                    <button type="submit" onClick={fetchMovies} className="btn btn-success adjust mt-5 mx-auto d-block w-25">Get Movie List</button>
                </div>


 {/* Cards*/}
                <div className="container">
                <div className="row">
                {movie_array && movie_array.map((movie,index)=>(
               
                 <div className="col-3" key={index}>
                      <div className="card mb-2 mt-5" >
                        <img src={movie.img_src} className="card-img-top img-fit" alt="pqr"></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>{movie.movie_name}</b></h5>
                            <p className="card-text"><b>Movie_id: </b>{movie.movie_id}</p>
                            <p className="card-text"><b>Category: </b>{movie.category}</p>
                            <p className="card-text"><b>Language: </b>{movie.language}</p>
                            <p className="card-text"><b>Type: </b>{movie.type}</p>
                            <p className="card-text"><b>Tickets: </b>{movie.ticketCount}</p>
                         </div>
                        </div>
                 </div>
               
                  
                ))}
                </div>
            </div>

           </div>
       );
    }


export default GetMovieList;