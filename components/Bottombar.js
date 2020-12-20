import React from 'react'
import Image from 'next/image'

function Bottombar() {
    return (
        <div className="bottombar">
            <button className="bottombar__chat">
                <Image
                    src="/chat.png"
                    width={500}
                    height={500}
                />
            </button>
            <button className="bottombar__start"> Start Shopping</button>
            <button className="bottombar__cart">
                <Image
                    src="/cart.png"
                    width={500}
                    height={500}
                />
            </button>
        </div>
    )
}

export default Bottombar
