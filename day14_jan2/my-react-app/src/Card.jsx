import Profile from "./main_pfp_1.jpeg"

function Card(){
    return(
        <div className="cardone">
            <img className="img" src={Profile} alt="This is my pfp" />
            <h1>PFP</h1>
            <p>Hey this is my pfp</p>
        </div>

    )
}

export default Card