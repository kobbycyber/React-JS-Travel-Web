import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
// Importing Image
import Image9 from '../images/img-9.jpg';
import Image2 from '../images/img-2.jpg';
import Image3 from '../images/img-3.jpg';
import Image4 from '../images/img-4.jpg';
import Image8 from '../images/img-8.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Epic Destinations!</h1> 
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={Image9} text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path='/services' />
                        <CardItem src={Image2} text="Travel through the Islands of Bali in a Private Cruise" label="Luxury" path='/services' />
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={Image3} text="Set Sail in the Athlantic Ocean visiting Uncharted Waters" label="Mystery" path='/services'/>
                        <CardItem src={Image4} text="Experience Football on Top of the Himilayan Mountains" label="Adventure" path='/services' />
                        <CardItem src={Image8} text="Ride throught the Sahara Desert on a guided camel tour" label="Adrenaline" path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
