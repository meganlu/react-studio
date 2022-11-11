// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return (
        <div className="BakeryItem">
            <img src={props.image}/>
            <div className="info">
                <div className="infoDiv">
                    <h1>{props.name}</h1>
                    <h3>{props.desc}</h3>
                </div>
                <div className="priceButtonDiv">
                    <div className="priceDiv"><h2>${props.price}</h2></div>
                    <div className="buttonDiv">
                        <button onClick={() => props.onAdd(props.name, props.price)}>Add to Cart</button>
                    </div>
               </div>
                
            </div>
        </div>
    );
}