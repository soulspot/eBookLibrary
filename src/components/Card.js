import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <>
         
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgSrc} class="card-img-top" alt={props.imgSrc} />
                    <div className ="card-body">
                    <h5 className ="card-title text-center">{props.title}</h5>
                    <p className ="card-text">{props.text}</p>
                    <div className="card-btn text-center">
                    <a href={props.btnLink} className ="btn btn-outline-success" rel="noopener noreferrer" target='_blank'>Check Out</a>
                    </div>
                    </div>
                </div>
            </div>
                   
        </>
    )
}

export default Card
