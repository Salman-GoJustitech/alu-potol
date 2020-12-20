import React from 'react'
import Image from 'next/image'

function Cart() {
    return (
        <div>
            <div className="cart__header">
                <Image
                    src="/tortorise.png"
                    width={30}
                    height={30}
                />
                <p>Regular Delivery</p>
            </div>
            <div className="cart__box">
                <div className="cart__count">
                    <button className="cart__count__button">
                        <Image
                            src="/up.png"
                            width={30}
                            height={30}
                        />
                        
                    </button>
                    <p>3</p>
                    <button className="cart__count__button">
                        <Image
                            src="/down.png"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
                <img className="cart__pic" src="https://cdn.chaldal.net/_mpimage/beef-bone-in-net-weight-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D70982&q=low&v=1&m=400&w=200&webp=1"/>
                <div className="cart__details">
                    <p className="cart__details__name">Beef Bone In (Net Weight ± 50 gm)</p>
                    <p className="cart__details__price">৳ 559 / 1 kg</p>
                </div>
                <p className="cart__money">৳ 559</p>
                <button className="cart__cross">
                    <Image
                        src="/cross.png"
                        width={30}
                        height={30}
                    />
                </button>
            </div>
            <div className="cart__appbar">
                <p className="cart__appbar__title">Place Order</p>
                <p className="cart__appbar__price">৳ 559</p>
            </div>
        </div>
    )
}

export default Cart
