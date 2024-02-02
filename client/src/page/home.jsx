import React from 'react'
import "./home.css"
import data from "../data.json"

const Home = () => {
  return (
    <div>
        <div className='flex navbar'>
            <h1>Incredible Breakfast Fusion</h1>
            <div className='flex navbar_side'>
                <h3 className='active'>Home</h3>
                <h3 className='active'>About</h3>
            </div>
        </div>
        <div className="grid-cont">
            
                {data.map((data) => (
                    <>
                    <div className='box box1'>
                    <div className='img'>
                        <img src={data.image} alt=""/>
                    </div>
                    <div>
                        <h4 >{data.weird_combo}</h4>
                        <h5>{data.description}</h5>
                    </div>
                    </div>
                    </>    
                ))}
                
            
            {/* <div className='box box1'>
                <div className='img'>
                    <h2>Img</h2>
                </div>
                <h4>weird combo</h4>
                <h5>Description</h5>
            </div>
            <div className='box box1'>
                <div className='img'>
                    <h2>Img</h2>
                </div>
                <h4>weird combo</h4>
                <h5>Description</h5>
            </div>
            <div className='box box1'>
                <div className='img'>
                    <h2>Img</h2>
                </div>
                <h4>weird combo</h4>
                <h5>Description</h5>
            </div>
                <div className='box box1'>
                <div className='img'>
                    <h2>Img</h2>
                </div>
                <h4>weird combo</h4>
                <h5>Description</h5>
            </div>
            <div className='box box1'>
                <div className='img'>
                    <h2>Img</h2>
                </div>
                <h4>weird combo</h4>
                <h5>Description</h5>
            </div>
            <div className='box box1'>
                <div className='img'>
                    <h2>Img</h2>
                </div>
                <h4>weird combo</h4>
                <h5>Description</h5>
            </div>
            <div className='box box1'>
                <div className='img'>
                    <h2>Img</h2>
                </div>
                <h4>weird combo</h4>
                <h5>Description</h5>
            </div>
            <div className='box box1'>
                <div className='img'>
                    <h2>Img</h2>
                </div>
                <h4>weird combo</h4>
                <h5>Description</h5>
            </div> */}
        </div>
    </div>
  )
}

export default Home
