import React from 'react'
import Bottombar from '../components/Bottombar'
import Navbar from '../components/Navbar'
import data from './api/data'
function Main() {
  console.log(data)
  return (
    <div >
      <Navbar/>
      <Bottombar/>
      <div className="main">
        <img height="110px" width="100%" src="https://cdn.chaldal.net/_mpimage/beverages?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D54912&q=low&v=1&w=700&webp=1"/>
        <div className="page__category">
          <a className="page__category__link" href="/">Food</a>
          <div className="page__category__title">
            <div className="page__category__title__line"/>
            <p className="page__category__title__text">Food</p>
            <div className="page__category__title__line"/>
          </div>
          <div className="page__category__list">
            {data.map((data)=>
              <div >
                <img height="125px" width="100%" src={data.img}/>
                <p>{data.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
