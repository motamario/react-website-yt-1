import React from 'react'
import CardItem from './CardItem'
import './cards.css'



function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src='/images/babak.jpg'
                    text='Travel to uncover the mysteries the past'
                    label='Heritage'
                    path='/services'
                    />

                    <CardItem
                    src='images/possessed-photography-YKW0JjP7rlU-unsplash.jpg'
                    text="Discover technological advancements that have remained undisclosed to the general public, necessitating confidentiality measures, including the application of 'lobotomies' as administered by 'Claire's'."
                    label='Technology'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                    src='/images/nasa-spaceship.jpg'
                    text='"Embark on a one-way journey into space with a sponsored ticket from the Human Population Control Association."'
                    label='Space'
                    path='/services'
                    />

                    <CardItem
                    src='/images/spirit-building.jpg'
                    text="Embark on a path toward spiritual evolution through the integration of cutting-edge substances, immersive auditory experiences, artistic expression, and therapeutic practices."
                    label='Spirituality'
                    path='/services'
                    />
                    <CardItem
                    src='/images/red-rock.jpg'
                    text='A commonplace holiday in a conventional world.'
                    label='Holiday'
                    path='/services'
                    />

                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards