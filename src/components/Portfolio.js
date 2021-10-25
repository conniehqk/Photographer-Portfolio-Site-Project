import { useEffect, useState } from "react";
import { Container, Image, Row } from "react-bootstrap";

function Portfolio() {
    const[imageList,setImageList]=useState([])
    
    useEffect(()=>{
       fetch(" http://localhost:3000/images")
       .then(res=>res.json())
       .then(data=>{
           console.log(data)
           setImageList(data)
       })
    },[])

    return(
        <Container>
            <h1>Portfolio Page</h1>
        </Container>
    )
}

export default Portfolio