import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css"

const Forms = () => {
    const[FoodItem1, setFoodItem1] = useState("");
    const[FoodItem2, setFoodItem2] = useState("");
    const[WeirdCombos, setWeirdCombo] = useState("");
    const[Description, setDescription] = useState("");
    const [name, setName] = useState("")
    const navigate = useNavigate();

    const Submit =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:3000/Weird_combos/",{FoodItem1,FoodItem2,WeirdCombos,Description,name})
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
        navigate('/')
    }
    return (
        <div>
            <div className="App2">
            <h2 className="WEIRD">Add Your Weird Combos</h2>

            <form className="forms" onSubmit={Submit}>
            <div>
                <label>Enter Food Item 1</label>
                <input type="text" placeholder="Enter your food item" onChange={(e)=>setFoodItem1(e.target.value)} required/>
            </div>
            <div>
                <label>Enter Food Item 2</label>
                <input type="text" placeholder="Enter your food item" onChange={(e)=>setFoodItem2(e.target.value)}/>
            </div>
            <div>
                <label>Enter Weird Combo</label>
                <input type="text" placeholder="Enter your weird combo" onChange={(e)=>setWeirdCombo(e.target.value)}/>
            </div>
            <div>
                <label>Enter Description</label>
                <input type="text" placeholder="Enter your description" onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div>
                <label>Enter Name</label>
                <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Forms