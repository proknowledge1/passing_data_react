
const Details=({dat})=>{
    console.log(dat)
    return(
        <div className="details">
            <p>{dat.task}</p>
            <p>{dat.more}</p>
        </div>
    )
}
export default Details;