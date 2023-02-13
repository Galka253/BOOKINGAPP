import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  row,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { createHotel } from "../../redux/actions/hotelAction";
import "bootstrap/dist/css/bootstrap.min.css";

function AddHotel() {
  const [cancel, setCancel] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [photos, setPhotos] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [roomsTitle, setRoomsTitle] = useState("");
  const [roomsPrice, setRoomsPrice] = useState("");
  const [roomsMaxPeople, setRoomsMaxPeople] = useState("");
  const [roomsAdds, setRoomsAdds] = useState("");
  const [roomsRoomAvailible, setRoomsRoomAvailible] = useState("");

  const toggle = () => {
    setCancel(!cancel);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    const newHotel = {
      name,
      city,
      address,
      photos,
      title,
      description,
      rating,
      roomsTitle,
      roomsPrice,
      roomsMaxPeople,
      roomsAdds,
      roomsRoomAvailible,
    };
    dispatch(createHotel(newHotel));
    toggle();
    navigate("/");
  };
  return (
    <div>
      <Button onClick={toggle}>Add Hotel</Button>
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Name of the hotel
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              placeholder="Put name of the Hotel"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="city" sm={2}>
            City
          </Label>
          <Col sm={10}>
            <Input
              id="city"
              name="city"
              placeholder="City"
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="address" sm={2}>
            Address
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setAddress(e.target.value)}
              id="address"
              name="address"
              placeholder="Put address"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="photos" sm={2}>
            Image of the hotel
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setPhotos(e.target.value)}
              id="photos"
              name="photos"
              placeholder="Img URL"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="photos" sm={2}>
            Image of the hotel
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setPhotos(e.target.value)}
              id="photos"
              name="photos"
              placeholder="Img URL"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="photos" sm={2}>
            Image of the hotel
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setPhotos(e.target.value)}
              id="photos"
              name="photos"
              placeholder="Img URL"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="photos" sm={2}>
            Image of the hotel
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setPhotos(e.target.value)}
              id="photos"
              name="photos"
              placeholder="Img URL"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="photos" sm={2}>
            Image of the hotel
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setPhotos(e.target.value)}
              id="photos"
              name="photos"
              placeholder="Img URL"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="title" sm={2}>
            Title
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              name="title"
              placeholder="Put title"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={2}>
            Description
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              name="description"
              placeholder="Put description"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="rating" sm={2}>
            Rating
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              name="rating"
              placeholder="Put rating"
              type="number"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="roomsTitle" sm={2}>
            Rooms title
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setRoomsTitle(e.target.value)}
              id="roomsTitle"
              name="roomsTitle"
              placeholder="Put roomsTitle"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="C" sm={2}>
            Price
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setRoomsPrice(e.target.value)}
              id="roomsTitle"
              name="roomsTitle"
              placeholder="Put price"
              type="number"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="roomsMaxPeople" sm={2}>
            Rating
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setRoomsMaxPeople(e.target.value)}
              id="roomsMaxPeople"
              name="roomsMaxPeople"
              placeholder="roomsMaxPeople"
              type="number"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="roomsAdds" sm={2}>
            Rating
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setRoomsAdds(e.target.value)}
              id="roomsAdds"
              name="roomsAdds"
              placeholder="roomsAdds"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="roomsRoomAvailible" sm={2}>
            Room Availible
          </Label>
          <Col sm={10}>
            <Input
              onChange={(e) => setRoomsRoomAvailible(e.target.value)}
              id="roomsRoomAvailible"
              name="roomsRoomAvailible"
              placeholder="Put availble rooms"
              type="number"
            />
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
export default AddHotel;
