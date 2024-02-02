import React, { useEffect} from 'react'
import "./home.css"
// import data from "../data.json"
import axios from 'axios'

const Home = () => {

    const [data, setData] = React.useState([])

    useEffect(() => {
        axios
          .get('http://localhost:3000')
          .then((res) => setData(res.data))
          .catch((err) => console.log(err))
          console.log(data)
    }, [])

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
            {
                data.map((data) => {
                    return (
                        <>
                        <div className='box box1'>
                            <div>
                                <p>{data["Weird Combos"]}</p>
                                <div className='flex'>
                                <p>{data["Food Item1"]}</p>
                                <p>+</p>
                                <p>{data["Food Item2"]}</p>
                                </div>
                                <p>{data.Description}</p>
                            </div>
                        </div>
                        </>
                    )
                })
            }
                {/* {data.map((data) => (
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
                ))} */}
        </div>
    </div>
  )
}

export default Home
