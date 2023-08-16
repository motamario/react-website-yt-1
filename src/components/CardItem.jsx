import React from 'react'
import { Link } from 'react-router-dom'
import './cards.css'

function CardItem(props) {
  return (
    <div className='list-container'>
        <li className='cards__item'>
            <Link className="cards__item__links" to={props.path}>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt=""
                     className="cards__item__img" 
                    />
                </figure>
                <div className="cards__item__info">
                    
                    <h5 className="cards__item__text">
                        {props.text}
                    </h5>

                </div>
            </Link>
        </li>

    </div>
  )
}

export default CardItem