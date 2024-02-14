import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import "./UpdateFood.css"

const UpdateFood= () => {

    const {id} = useParams()
    const[FoodItem1, setFoodItem1] = useState("");
    const[FoodItem2, setFoodItem2] = useState("");
    const[WeirdCombos, setWeirdCombo] = useState("");
    const[Description, setDescription] = useState("");
    const [name, setName] = useState("")

    const navigate = useNavigate()


    useEffect(()=>{
        axios.get('http://localhost:3000/getUser/'+id)
        .then(result=> {
            console.log(result)
            setFoodItem1(result.data.FoodItem1)
            setFoodItem2(result.data.FoodItem2)
            setWeirdCombo(result.data.WeirdCombos)
            setDescription(result.data.Description)
            setName(result.data.name)
        })
        .catch(err => console.log(err))
    },[])

    const Update = (e) =>{
        e.preventDefault()
        axios.put('http://localhost:3000/UpdateFood/'+id,{FoodItem1,FoodItem2,WeirdCombos,Description,name})
        .then(result=> {console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="App3">
        <h2 className='Updatesss'>Update User</h2>
        <form  className="updates" onSubmit={Update}>
            <div>
                <label>Enter Food Item 1</label>
                <input type="text" value={FoodItem1} placeholder="Enter your food item" onChange={(e)=>setFoodItem1(e.target.value)} required/>
            </div>
            <div>
                <label>Enter Food Item 2</label>
                <input type="text" value={FoodItem2} placeholder="Enter your food item" onChange={(e)=>setFoodItem2(e.target.value)}/>
            </div>
            <div>
                <label>Enter Weird Combo</label>
                <input type="text" value={WeirdCombos} placeholder="Enter your weird combo" onChange={(e)=>setWeirdCombo(e.target.value)}/>
            </div>
            <div>
                <label>Enter Description</label>
                <input type="text" value={Description} placeholder="Enter your description" onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div>
                <label>Enter Name</label>
                <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateFood