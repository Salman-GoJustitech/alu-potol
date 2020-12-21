import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Cookies from 'universal-cookie';
 



function Navbar() {
    const [menu,setMenu]=useState(false);
    const [modal,setModal]=useState(false);

    // const data = {
    //     one: 'one',
    //     two: 'two',
    //     three: 'three'
    // }

    // const cookies = new Cookies();
    // cookies.set('myCat', data, { path: '/' });
    // console.log(cookies.get('myCat')); // Pacman
    
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
                <button className="navbar__profile"
                    onClick={() =>setModal(!modal)}
                >
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
            {modal ? (
                <div className="modal__background">
                    <div style={{position:"fixed",top:"10%" ,left:"20%",width:"50%"}}>
                        <div style={{display:"flex",padding:"10px 20px",alignItems:"center",backgroundColor:"#4F4F4F",width:"100%"}}>
                            <img src="/modal/1.png"/>
                            <p style={{color:"white",fontSize:"22px"}}> User</p>
                        </div>
                        <div style={{display:"flex",padding:"10px 20px",alignItems:"center",backgroundColor:"white",width:"100%"}}>
                            <img src="/modal/2.png"/>
                            <p style={{color:"#4F4F4F",paddingLeft:"5px",fontSize:"20px"}}>Your Profile</p>
                        </div>
                        <div style={{display:"flex",padding:"10px 20px",alignItems:"center",backgroundColor:"white",width:"100%"}}>
                            <img src="/modal/3.png"/>
                            <p style={{color:"#4F4F4F",paddingLeft:"5px",fontSize:"20px"}}>Your Orders</p>
                        </div>
                        <div style={{display:"flex",padding:"10px 20px",alignItems:"center",backgroundColor:"white",width:"100%"}}>
                            <img src="/modal/4.png"/>
                            <p style={{color:"#4F4F4F",paddingLeft:"5px",fontSize:"20px"}}>Payment History</p>
                        </div>
                        <div style={{display:"flex",padding:"10px 20px",alignItems:"center",backgroundColor:"white",width:"100%"}}>
                            <img src="/modal/5.png"/>
                            <p style={{color:"#4F4F4F",paddingLeft:"5px",fontSize:"20px"}}>Change Password</p>
                        </div>
                        <div style={{display:"flex",padding:"10px 20px",alignItems:"center",backgroundColor:"white",width:"100%"}}>
                            <img src="/modal/6.png"/>
                            <p style={{color:"#4F4F4F",paddingLeft:"5px",fontSize:"20px"}}>Language</p>
                        </div>
                        <div style={{display:"flex",padding:"10px 20px",alignItems:"center",backgroundColor:"white",width:"100%"}}>
                            <img src="/modal/7.png"/>
                            <p style={{color:"#4F4F4F",paddingLeft:"5px",fontSize:"20px"}}>Help & More</p>
                        </div>
                        <div style={{display:"flex",padding:"10px 20px",alignItems:"center",backgroundColor:"white",width:"100%"}}>
                            <img src="/modal/8.png"/>
                            <p style={{color:"#4F4F4F",paddingLeft:"5px",fontSize:"20px"}}>Log out</p>
                        </div>
                    </div>
                </div>
            ):(null)}
        </div>
    )
}

export default Navbar
