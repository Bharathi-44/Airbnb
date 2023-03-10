

function Card(props)
{
    return (
        <div className="col-4 badgepos">
            {props.openSpots===0 && <div className="badge">Sold Out</div>}
            <img src={`./${props.img}`} alt="katie" className="cardimg" />
            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex flex-row mt-1">
                    <div>
                        <img src="./star.png" alt="star" className="starimg"/>
                    </div>
                    <div className="mt-1 ml-1">
                        <span className="mt-5">{props.rating}</span>
                        <span className="text-color">({props.reviewCount}) .</span>
                        <span className="text-color">{props.country}</span>
                    </div>
                </div>
                <p>{props.title}</p>
                <p className="mt-0"><span className="subtext">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}

export default Card;

//basically code within return is jsx
//{} this code is js

//using props we can use the same componet for varius data for n times