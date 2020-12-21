import React,{ useState, useEffect } from 'react'
import cardData from './api/cardData'
import Bottombar from '../components/Bottombar'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Cookies from 'universal-cookie';

const arr=[];

function Card() {
    
    const cookies = new Cookies();
    // const cartNumber=cookies.get('myData'); 
    // console.log(cartNumber.lenght);
    // const [cartPointer, setCartPointer] = useState(cartNumber);
        // function PassData(alldata){
            
        //     const data = 
        //         {
        //         img: alldata.img,
        //         name: alldata.name,
        //         price: alldata.Price,
        //         amount: alldata.Amount,
        //         unit: alldata.Unit,
        //         cart:1,
        //     }
            
        //     arr.push(data)
        //     console.log(arr);
        //     cookies.set('myCat', arr, { path: '/' });
        //     console.log(cookies.get('myCat')); // Pacman
        // }
        
        function PassData(alldata){
            
            
            
            // arr.push(data)
            // console.log(arr);
            const cookies = new Cookies();
            // cookies.remove('myCato');
            
            let old = cookies.get('myData');
            
            const data = 
                {
                // id: alldata.id,    
                img: alldata.img,
                name: alldata.name,
                price: alldata.Price,
                amount: alldata.Amount,
                unit: alldata.Unit,
                cartQuantity:1,
            }
            
            // console.log(old);
            
            if(old == null){
                old=[data];
            }
            else{               
                old.push(data);
            }
            
            cookies.set('myData', old, { path: '/' });
            // console.log(cookies.get('myCat')); // Pacman
        }
        // console.log(cartPointer)
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
            {/* {cartPointer >0 ?(
                <div style={{position:"fixed",bottom:"23px",right:"15px",zIndex:"111111",background:"F97178",color:"white",padding:"0px 5px",borderRadius:"50px"}}>
                    {cartPointer}
                    </div>
            ):(
                null
            )} */}
        </div>
    )
}

export default Card
