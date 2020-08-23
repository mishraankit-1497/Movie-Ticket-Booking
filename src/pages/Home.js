import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../components/Home.css';
import MainArea from './MainArea';
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies:[
            {
                name:"Captain America",
                description:'Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.',
                images:'https://zombiesruineverything.files.wordpress.com/2014/03/winter11111.jpg',
            },
            {
                name:'DownTon Abbey',
                description:'Robert Crawley risks losing the family estate after his heirs die in the Titanic. Soon the Crawleys are introduced to Matthew, the next heir in line, who resists the aristocratic way of life.',
                images:'https://i.redd.it/atyf1poo8oe31.jpg'
            },
            {
                name:'Humpty Sharma ki Dulhania',
                description:'Humpty Sharma Ki Dulhania is a 2014 Indian Hindi-language romantic comedy film written and directed by Shashank Khaitan in his directorial debut, and produced by Karan Johar.',
                images:'https://i2.wp.com/chaiwithshai.com/wp-content/uploads/2014/07/ed1cc-humpty-sharma-ki-dulhania-new-hindi-movie-poster-download.jpg'
            }, 
             {
                name:"Ek Villain",
                description:'It stars Sidharth Malhotra, Shraddha Kapoor and Riteish Deshmukh, and is about a hardened criminal whose terminally ill wife is murdered by a sadistic serial killer. ',
                images:'http://www.desktopimages.org/pictures/2014/0715/1/orig_63413.jpg',
            },
            {
                name:'Singham Returns',
                description:'Singham Returns is a 2014 Indian Hindi-language action film directed by Rohit Shetty and produced by Reliance Entertainment, Ajay Devgn FFilms and Rohit Shetty Productions',
                images:'http://www.desktopimages.org/pictures/2014/0715/1/singham-returns-bollywood-movie-poster-wallpaper-63407.jpg'
            },
            {
                name:'Gunday',
                description:'Gunday is a story about two best friends and outlaws, who fall in love with a cabaret dancer, which causes rivalry and misunderstandings between them.',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1UO5tH-VvLMqVRMOpX-Zrw5oLOjC4W6HoMg&usqp=CAU'
            },            
            ]
        }
      }
    render(){
        let movieCards=this.state.movies.map((movies,index)=>{
            return(
                <div className="col-xl-4 col-lg-4 col-md-2 col-sm-1" key={index}>
                    <MainArea movies={movies}></MainArea>                    
                </div>
            )
        })

      return(
          <div>
              <nav id="home-link" className="navbar navbar-expand-lg navbar-light bg-info ">
  <a className="navbar-brand" href="#"><i className="fas fa-film"></i>  ShaantiCinema</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" id="home-link">
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



{/* Corousel */}
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://zombiesruineverything.files.wordpress.com/2014/03/winter11111.jpg" className="d-block w-100 img-fluid" alt="holly"></img>
    </div>
    <div className="carousel-item">
      <img src="https://i.redd.it/atyf1poo8oe31.jpg" className="d-block w-100 img-fluid" alt="america"></img>
    </div>
    <div className="carousel-item">
      <img src="https://i2.wp.com/chaiwithshai.com/wp-content/uploads/2014/07/ed1cc-humpty-sharma-ki-dulhania-new-hindi-movie-poster-download.jpg" className="d-block w-100 img-fluid" alt="bolly"></img>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


<hr></hr>

{/* Cards */}
    <div className="container fluid">
        <div className="row">
            {movieCards}
        </div>
    </div>

{/* Footer */}
    <footer class="footer-distributed">

<div class="footer-left">
    <h3>Contact<span>Us</span></h3>
    <p class="footer-company-name">© 2020 Indian Cinema Pvt. Ltd. </p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker"></i>
          <p><span>5th Floor,Shaanti Cinema Hall,</span>
            Near Nucleus Mall,Ranchi-834001</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91 6201397442</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:mishraankit1497@gmail.com">mishraankit1497@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
       Follow us on social media</p>
    <div className="footer-icons">
        <a href="https://www.facebook.com/ankitkumar.mishra.54"><i class="fab fa-facebook"></i></a>
        <a href="https://www.twitter.com/@mishra__1497"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/mishra_ankit97"><i class="fab fa-instagram"></i></a>
        
    </div>
</div>
</footer>


</div>


      );
  }
}

export default Home;