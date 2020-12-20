import React from 'react'
import cardData from './api/cardData'
import Bottombar from '../components/Bottombar'
import Navbar from '../components/Navbar'
import Image from 'next/image'

function Card() {
    return (
        <div>
            <Navbar/>
            <Bottombar/>
            <div className="main">
                <div className="page__card__list">
                    {cardData.map((data)=>
                        <div >
                            <img height="125px" width="100%" src={data.img}/>
                            <p className="page__card__name">{data.name}</p>
                            <p className="page__card__quantity">{data.Amount +" "+ data.Unit } </p>
                            <p className="page__card__price">{"৳ " +data.Price}</p>
                            <button className="page__card__button">
                            <Image
                                src="/horse.png"
                                width={25}
                                height={25}
                            />
                            <span >Add to bag</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card
