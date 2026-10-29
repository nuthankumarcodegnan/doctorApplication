function DoctorCard({name="Guest",salary="0",gender="-----",age="0",specialization="-----"}){
    
    return(
        <div style={{border:"2px solid black",borderRadius:"5px",width:"350px",padding:"5px 20px"}}>
                <h5>Name : {name}</h5>
                <h5>Salary : {salary}</h5>
                <h5>Gender : {gender}</h5>
                <h5>Age : {age}</h5>
                <h5>Specialization : {specialization}</h5>
        </div>
    )
}

export default DoctorCard;