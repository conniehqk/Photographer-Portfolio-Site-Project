

function PhotoCard({photo}){

    return(
     <div className="card" id="photocard">
         <img styles={{ width: 50, height: 50 }} src={photo.image} img="name" alt="pic" />
     </div>
    )
}
export default PhotoCard