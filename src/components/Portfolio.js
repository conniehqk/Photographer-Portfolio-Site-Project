import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";
import { Container,FloatingLabel,Form} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function Portfolio({imageList}) {
  // const [imageList, setImageList] = useState([]);
  const [rating, setRating] = useState(null);
  const [comment,setComment]=useState('')
  const [submittedData, setSubmittedData] = useState([])

  console.log(rating);
  // console.log(comment)
  // useEffect(() => {
  //   fetch(" http://localhost:3000/images")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setImageList(data);
  //     });
  // }, []);

  const photoToRender = imageList.map((photo) => {
    return <PhotoCard photo={photo} />;
  });

  const ratingChanged = (data) => {
    setRating(data);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newObj={
      rating:rating,
      comment:comment
    }
    const dataarray=[...submittedData,newObj]
    setSubmittedData(dataarray)
    console.log("newObje", newObj)
  }

  const renderCommentsAndrating=submittedData.map((item)=>{
    return(
      <div>
        <h3>Rating:{item.rating} ⭐</h3>
        <p>MyComment: {item.comment} </p>
      </div>
    )
  })

  return (
    <Container>
      <div className="checkbox">
        <form>
          <label>Wedding</label>
          <input type="checkbox" name="weddings"></input>
          <label>Portraits</label>
          <input type="checkbox" name="portraits"></input>
          <label>Martenity</label>
          <input type="checkbox" name="maternity"></input>
          <label>Family</label>
          <input type="checkbox" name="family"></input>
        </form>
      </div>
      <div className="cards">{photoToRender}</div>
      <div>
        <ReactStars
          count={5}
          value={rating}
          onChange={(data) => ratingChanged(data)}
          size={24}
          activeColor="#ffd700"
        />

        <>
        
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingTextarea2" label="Comments"  >
            <Form.Control
             
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px", width: "600px" }}
              onChange={(e)=>setComment(e.target.value)}
            />
            <button>Submit</button>
          </FloatingLabel>
          </Form>
        </>
      </div>
      {renderCommentsAndrating}
    </Container>
  );
}

export default Portfolio;
