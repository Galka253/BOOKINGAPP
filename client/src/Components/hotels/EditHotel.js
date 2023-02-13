import React, { useState } from "react";
import { updateHotel } from "../../redux/actions/hotelAction";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";

function EditHotel({ hotel }) {
  const [modal, setModal] = useState(false);
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
  const dispatch = useDispatch();
  const toggle = () => {
    setModal(!modal);
  };
  const editHotel = () => {
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
    dispatch(updateHotel(hotel._id, newHotel));
    toggle();
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Edit Hotel{" "}
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader>Update Hotel Info</ModalHeader>
        <ModalBody>
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
                  value={name}
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
                  value={city}
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
                  value={photos}
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
                  value={photos}
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
                  value={photos}
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
                  value={photos}
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
                  value={photos}
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
                  value={title}
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
                  value={description}
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
                  value={rating}
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
                  value={roomsTitle}
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
                  value={roomsPrice}
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
                  value={roomsMaxPeople}
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
                  value={roomsAdds}
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
                  value={roomsRoomAvailible}
                  type="number"
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editHotel}>
            save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditHotel;
