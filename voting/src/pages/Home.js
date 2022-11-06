import data from "../data.json"
import Details from "./Details";
const Home=()=>{
    
    console.log(data)
    return(
        <div className="home">
            <div className="tasks">
                {data && data.data.map((dat)=>(
                        <Details key={dat._id} dat={dat}/>
                    ))}
            </div>
            
        </div>
    );
}
export default Home;