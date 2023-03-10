function Card2(props)
{
    return (
        <div className="col-4 badgepos">
            {props.item.openSpots===0 && <div className="badge">Sold Out</div>}
            <img src={`./${props.item.coverImg}`} alt="katie" className="cardimg" />
            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex flex-row mt-1">
                    <div>
                        <img src="./star.png" alt="star" className="starimg"/>
                    </div>
                    <div className="mt-1 ml-1">
                        <span className="mt-5">{props.item.stats.rating}</span>
                        <span className="text-color">({props.item.stats.reviewCount}) .</span>
                        <span className="text-color">{props.item.location}</span>
                    </div>
                </div>
                <p>{props.item.title}</p>
                <p className="mt-0"><span className="subtext">From ${props.item.price}</span> / person</p>
            </div>
        </div>
    )
}

export default Card2;

//basically code within return is jsx
//{} this code is js

//using props we can use the same componet for varius data for n times

// here in card2 we are using the data directly sent to props and then spreaded over in card compnent only 