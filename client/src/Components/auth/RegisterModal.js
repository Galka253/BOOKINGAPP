import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { registerUser } from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

function RegisterModal() {
  const [modal, setModal] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImage] = useState("");

  const toggle = () => {
    setModal(!modal);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const register = () => {
    const newUser = {
      firstname,
      lastname,
      phone,
      username,
      email,
      password,
      img,
    };
    dispatch(registerUser(newUser));
    toggle();
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "0 15px" }}>
      <NavLink href="#" onClick={toggle}>
        Register
      </NavLink>
      <Modal isOpen={modal}>
        <ModalHeader>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input
                type="text"
                onChange={(event) => setFirstname(event.target.value)}
                name="firstname"
                id="firstname"
                placeholder="First name"
                className="mb-3"
              />
              <Label for="lastname">Last Name</Label>
              <Input
                type="text"
                onChange={(event) => setLastname(event.target.value)}
                name="lastname"
                id="lastname"
                placeholder="Last name"
                className="mb-3"
              />
              <Label for="phone">Phone</Label>
              <Input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                id="phone"
                placeholder="Phone"
                className="mb-3"
              />
              <Label for="username">Username</Label>
              <Input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                id="username"
                placeholder="Username"
                className="mb-3"
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                id="email"
                placeholder="email"
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
              />
              <Label for="img">Image</Label>
              <Input
                type="text"
                onChange={(event) => setImage(event.target.value)}
                name="img"
                id="img"
                placeholder="Image"
                className="mb-3"
              />
              <Button
                color="dark"
                style={{ marginTop: "2rem" }}
                block
                onClick={register}
              >
                Register
              </Button>
              <Button
                color="dark"
                style={{ marginTop: "2rem" }}
                block
                onClick={toggle}
              >
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default RegisterModal;
