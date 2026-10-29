import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";

function Home(){
    let [data,setData]=useState([]);
    let [search,setSearch]=useState("");
    useEffect(()=>{
        fetch("https://api-bdti.onrender.com/doctors")
            .then((resp)=>resp.json())
            .then((d)=>{setData(d)})
    },[])
    let filterDoctor=data.filter((doctor)=>{
        return doctor.name.toLowerCase().includes(search.toLowerCase())
    })
    let container={
        display:"flex",
        justifyContent:"flex-start",
        gap:"5px",
        flexWrap:"wrap",
        marginTop:"20px"
    }
    return(
        <>
            <label>Search For Doctor :</label>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <div style={container}>
            {
                filterDoctor.length>0 ?               
                (filterDoctor.map((d)=>(                    
                    <DoctorCard name={d.name} gender={d.gender} age={d.age} salary={d.salary} specialization={d.specialization} key={d.id}/>
                ))) : (<h1 align="center">No Doctor Found</h1>)
            }
            </div>
        </>
    )
}

export default Home;