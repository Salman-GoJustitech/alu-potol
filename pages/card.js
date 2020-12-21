import React,{ useState, useEffect } from 'react'
import cardData from './api/cardData'
import Bottombar from '../components/Bottombar'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Cookies from 'universal-cookie';



function Card() {
    const arr=[]
    
        function PassData(alldata){
            
            const data = 
                {
                img: alldata.img,
                name: alldata.name,
                price: alldata.Price,
                amount: alldata.Amount,
                unit: alldata.Unit,
                cart:1,
            }
            
            arr.push(data)
            console.log(arr);
            const cookies = new Cookies();
            cookies.set('myCat', arr, { path: '/' });
            console.log(cookies.get('myCat')); // Pacman
        }
        
    return (
        <div>
            <Navbar/>
            <Bottombar/>
            <div className="main">
                <div className="page__card__list">
                    {cardData.map((data)=>
                        <div className="page__card__listu" >
                            <Link href="/product">
                                <div>
                                    <img height="125px" width="100%" src={data.img}/>
                                    <p className="page__card__name">{data.name}</p>
                                    <p className="page__card__quantity">{data.Amount +" "+ data.Unit } </p>
                                    <p className="page__card__price">{"৳ " +data.Price}</p>
                                </div>
                            </Link>
                            {/* onMouseOver={setCount(true)} onMouseOut={setCount(false)} */}
                            {/* {newView} */}
                            <button className="page__card__button" onClick={()=>PassData(data)}>

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
