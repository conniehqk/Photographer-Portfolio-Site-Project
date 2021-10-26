

function PhotoCard({photo}){

    return(
        <>

     <div className="card">
         <img styles={{ width: 50, height: 50 }} src={photo.image} img="name"/>
     </div>
     </>
    )
}
export default PhotoCard