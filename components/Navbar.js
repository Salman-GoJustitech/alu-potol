import React,{useState} from 'react'
import Image from 'next/image'
function Navbar() {
    const [menu,setMenu]=useState(false);
    console.log(menu)
    return (
        <div>
            
            <div className="navbar">
                <button 
                className="navbar__toggle"
                onClick={() =>setMenu(!menu)}
                >
                    <Image
                    src="/toggle.png"
                    width={500}
                    height={500}
                    />
                </button>
                <div className="navbar__search">
                    <input className="navbar__input" placeholder="Search for products (e.g. eggs, milk, potato)"/>
                    <button className="navbar__button">
                        <Image
                        src="/search.png"
                        width={500}
                        height={500}
                        />
                    </button>
                </div>
                <button className="navbar__profile">
                    <Image
                    src="/3dot.png"
                    width={500}
                    height={500}
                    />
                </button>
            </div>
            {menu ? (
                <div className="sidebar__background">
                    <div className="sidebar">
                        <p className="sidebar__header">Offers <span className="sidebar__header__offer">70</span></p>
                        <div className="sidebar__category__main">
                            <div className="sidebar__category"> 
                                <Image src="/foods.png" width={20} height={20} />
                                <p className="sidebar__category__name">Fruits & Vegetables</p>
                            </div>
                            <div className="sidebar__category"> 
                                <Image src="/foods.png" width={20} height={20} />
                                <p className="sidebar__category__name">Breakfast</p>
                            </div>
                            <div className="sidebar__category"> 
                                <Image src="/foods.png" width={20} height={20} />
                                <p className="sidebar__category__name">Beverage</p>
                            </div>
                            <div className="sidebar__category"> 
                                <Image src="/foods.png" width={20} height={20} />
                                <p className="sidebar__category__name">Meat & Fish</p>
                            </div>
                            <div className="sidebar__category"> 
                                <Image src="/foods.png" width={20} height={20} />
                                <p className="sidebar__category__name">Snacks</p>
                            </div>
                            <div className="sidebar__category"> 
                                <Image src="/foods.png" width={20} height={20} />
                                <p className="sidebar__category__name">Dairy</p>
                            </div>
                            <div className="sidebar__category"> 
                                <Image src="/foods.png" width={20} height={20} />
                                <p className="sidebar__category__name">Frozen & Canned</p>
                            </div>
                            <div className="sidebar__category"> 
                                <Image src="/foods.png" width={20} height={20} />
                                <p className="sidebar__category__name">Bread & Bakery</p>
                            </div>
                        </div>
                    </div>
                </div>
            ):(null)}
        </div>
    )
}

export default Navbar
