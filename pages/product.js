import React from 'react'
import Image from 'next/image'

function Product() {
    return (
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
                    <button className="product__count__button">
                        <Image
                            src="/plus.png"
                            width={30}
                            height={30}
                        />
                    </button>
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
        </div>
    )
}

export default Product
