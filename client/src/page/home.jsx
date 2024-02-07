import React, { useEffect} from 'react'
import "./home.css"
// import data from "../data.json"
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

const Home = () => {

    const [data, setData] = React.useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getApi(){
            try{
                const res = await axios.get('http://localhost:3000/')
                console.log(res.data)
                setData(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getApi()
    }, [])

    const handleDelete = (id) =>{
        axios.delete('http://localhost:3000/deleteUser/'+id)
        .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <div className='flex navbar'>
            <h1>Incredible Breakfast Fusion</h1>
            <div className='flex navbar_side'>
                <Link to='/weird'><button className='active'>Add +</button></Link>
                <button className='active'>Home</button>
                <button className='active'>About</button>
            </div>
        </div>
        <div className="grid-cont">
            {
                data.map((data) => {
                    return (
                        <>
                        <div className='box box1'>
                            <div>
                                <p>{data["WeirdCombos"]}</p>
                                <div className='flex'>
                                <p>{data["FoodItem1"]}</p>
                                <p>+</p>
                                <p>{data["FoodItem2"]}</p>
                                </div>
                                <p>{data.Description}</p>
                                <br/>
                                <button onClick={() => navigate (`/update/${data._id}`,{state:{data}})}>Edit</button>
                                <button onClick={(e)=>handleDelete(data._id)}>Delete</button>
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
