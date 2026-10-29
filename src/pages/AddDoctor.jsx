import { useState } from "react";

function AddDoctor(){
    let[name,setName]=useState("");
    let[salary,setSalary]=useState("");
    let[gender,setGender]=useState("");
    let[age,setAge]=useState("");
    let[specialization,setSpecialization]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("Name :"+name);
        console.log("Salary :"+salary);
        console.log("Age :"+age);
        console.log("Gender :"+gender);
        console.log("Specialization :"+specialization);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}/> <br/><br/>
                <input type="text" name="salary" placeholder="Enter your salary" onChange={(e)=>{setSalary(e.target.value)}} /> <br/><br/>
                <input type="text" name="gender" placeholder="Enter your gender" onChange={(e)=>{setGender(e.target.value)}}/> <br/><br/>
                <input type="text" name="age" placeholder="Enter your age" onChange={(e)=>{setAge(e.target.value)}}/> <br/><br/>
                <input type="text" name="specialization" placeholder="Enter your specialization" onChange={(e)=>{setSpecialization(e.target.value)}}/> <br/><br/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default AddDoctor;