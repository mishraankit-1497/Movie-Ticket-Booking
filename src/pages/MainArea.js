import React, { Component } from 'react';
import '../components/Home.css'
class MainArea extends Component{
    render()
    {
        return(
            <div className="container">
                <div className="card mb-5">
            <img src={this.props.movies.images} className="card-img-top fix_card " alt="abc"></img>
            <div className="card-body">
                <h5 className="card-title">{this.props.movies.name}</h5>
                <p className="card-text desc">{this.props.movies.description}</p>
                <button type="button" class="btn btn-outline-danger"><i class="far fa-heart"></i></button>
            </div>
        </div>
            </div>
            
        );
    }
}

export default MainArea;