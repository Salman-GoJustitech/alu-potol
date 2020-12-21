import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Cookies from 'universal-cookie';



function Cart() {
    
    const cookies = new Cookies();
    // cookies.set('myCat', arr, { path: '/' });
    const data=cookies.get('myData'); 
    const [cart, setCart] = useState(data);

    function Reduce(){
        const cookies = new Cookies();
            // cookies.remove('myCato');
            
        let old = cookies.get('myData');
        old.pop();
        cookies.set('myData', old, { path: '/' });
        const data2=cookies.get('myData'); 
        setCart(data2);
        

    }
    return (
        <div>
            <div className="cart__header">
                <Image
                    src="/tortorise.png"
                    width={30}
                    height={30}
                />
                <p>Regular Delivery</p>
                <Link href="/card">
                    <button style={{marginLeft:"50%"}}>Close</button>
                </Link>
            </div>
            {cart != null ?(
                cart.map((data)=>
            
                <div className="cart__box">
                    <div className="cart__count">
                        <button className="cart__count__button" onClick={()=>data.cartQuantity+1}>
                            <Image
                                src="/up.png"
                                width={30}
                                height={30}
                            />
                            
                        </button>
                            <p>{data.cartQuantity}</p>
                        <button className="cart__count__button" onClick={()=>data.cartQuantity-1}>
                            <Image
                                src="/down.png"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                    <img className="cart__pic" src={data.img}/>
                    <div className="cart__details">
                <p className="cart__details__name">{data.name}</p>
                <p className="cart__details__price">৳ {data.price} / {data.amount} {data.unit}</p>
                    </div>
                <p className="cart__money">৳ {data.cartQuantity * data.price}</p>
                    <button className="cart__cross" onClick={()=>Reduce()}>
                        <Image
                            src="/cross.png"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
                )
            ):(
                <div>
                    <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>No Cart Data</h1>
                    </div>
            )}
            <div className="cart__appbar">
                <p className="cart__appbar__title">Place Order</p>
                <p className="cart__appbar__price">৳ 559</p>
            </div>
        </div>
    )
}

export default Cart
