// the component function
const Movie = (props) => {

    //The Components Returned JSX
    return <div className="Movie"> 
    <h1>Name: {props.name}</h1>
    <h2>Released: {props.year}</h2>
    <h3>Rating: {props.rating}</h3>
    <img src={props.image} alt="image"/>
    </div>
}

// export the component
export default Movie