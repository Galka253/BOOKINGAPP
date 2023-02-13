import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardLink,
  CardText,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteHotel } from "../../redux/actions/hotelAction";
import EditHotel from "./EditHotel";

const HotelCard = ({ hotel }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteHotel(hotel._id));
  };
  return (
    <div style={{ minWidth: "300px", margin: "10px" }}>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">{hotel.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {hotel.rating}
          </CardSubtitle>
        </CardBody>
        <img alt="Hotel image" src={hotel.photos} width="10%" />
        <CardBody>
          <CardText>{hotel.description}</CardText>
          <CardLink href="#">Reservation</CardLink>
        </CardBody>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={deleteItem}>delete</Button>
          <EditHotel hotel={hotel} />
        </div>
      </Card>
    </div>
  );
};

export default HotelCard;
