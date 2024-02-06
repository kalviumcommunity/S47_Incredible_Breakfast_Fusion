import React,{useState} from "react";
import axios from "axios";

const Forms = () => {
    const[FoodItem1, setFoodItem1] = useState("");
    const[FoodItem2, setFoodItem2] = useState("");
    const[WeirdCombos, setWeirdCombo] = useState("");
    const[Description, setDescription] = useState("");
    

    const Submit =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:3000/Weird_combos/",{FoodItem1,FoodItem2,WeirdCombos,Description})
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
    return (
        <div>
            <form onSubmit={Submit}>
            <h2>Add Your Weird Combos</h2>
            <div>
                <label>Enter Food Item 1</label>
                <input type="text" placeholder="Enter your food item" onChange={(e)=>setFoodItem1(e.target.value)}/>
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
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Forms