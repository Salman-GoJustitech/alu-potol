import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Product() {
    let amount = 250;
    return (
    <div>
        <Link href="/card"><button style={{position:"fixed",top:"10px",right:"10px",border:"none",backgroundColor:"transparent",outlineStyle:'none'}}>
            <img
                src="/cross2.png"
                width="30px"
                height="30px"
                
            />
        </button></Link>
        <div className="product">
            <img height="300px" width="100%" src="https://cdn.chaldal.net/_mpimage/beef-bone-in-net-weight-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D70982&q=low&v=1&w=600&webp=1"/>
            <p className="product__name">Beef Bone In (Net Weight ± 50 gm)</p>
            <p className="product__quantity">1 kg</p>
            <p className="product__price">৳ 559</p>
            <div className="product__count">
                <div className="product__count__box">
                    <button className="product__count__button">
                        <Image
                            src="/minus.png"
                            width={30}
                            height={30}
                        />
                    </button>
                    <div className="product__count__amount"><p>{amount}</p> <p style={{fontSize:"12px"}}>in bag</p></div>
                    <button className="product__count__button">
                        <Image
                            src="/plus.png"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
                <button className="product__count__buy">
                    Buy Now
                </button>
            </div>
            <hr style={{marginTop:"30px" }}></hr>
            <p style={{marginTop:"20px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link href="/card"><button style={{display:'flex', marginLeft:'43%', border:"none", background:"transparent", outlineStyle:'none', color:'#FA8082', fontSize:'18px', fontWeight:'800'}}>BACK</button></Link>

            
        </div>
        <div style={{backgroundColor:'#F7F7F7'}}>
        <img
                        src="/high.png"
                        width="100%"
                       
                    />
        <p style={{padding:"30px 20px"}}>alupotol.com is an online shop in Dhaka, Bangladesh. We believe time is valuable to our fellow Dhaka residents, and that they should not have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Alupotol delivers everything you need right at your door-step and at no additional cost.</p>
        <img
                        src="/bottom.png"
                        width="100%"
                        
                    />
        </div>
    </div>
    )
}

export default Product
