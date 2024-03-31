import { Button, Card } from "react-bootstrap";

export default function ProductCard(props) {

    let details = props.productDetails;

    return(

    <Card style={{ width: '18rem', border: "1px solid", borderRadius:"4px", padding:"10px", margin:"5px"}}  >
      <Card.Img variant="top" src={details.image} style={{height:"70%", width:"60   %"}}/>
      <Card.Body>
        <Card.Title>{details.brand} - {details.type}</Card.Title>
        <Card.Text>
          {details.price} Rs.
        </Card.Text>    
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    )

}