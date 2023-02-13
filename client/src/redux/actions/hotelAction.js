import axios from "axios";
import { LIST_OF_HOTELS } from "./actionTypes";
//LIST OF HOTELS
export const listOfHotels = () => (dispatch) => {
  axios
    .get("/api/hotels/listOfHotels")
    .then((res) => dispatch({ type: LIST_OF_HOTELS, payload: res.data }))
    .catch((err) => console.log(err));
};

//HOTEL
export const createHotel = (newHotel) => (dispatch) => {
  axios
    .post("/api/hotels", newHotel)
    .then((res) => dispatch(listOfHotels()))
    .catch((err) => console.log(err));
};
//EDIT HOTELINFO
export const updateHotel = (idHotel, hotelUpdated) => (dispatch) => {
  axios
    .put(`/api/hotels/update/${idHotel}`, hotelUpdated)
    .then((res) => dispatch(listOfHotels()))
    .catch((err) => console.log(err));
};
//DELETE HOTEL
export const deleteHotel = (idHotel) => (dispatch) => {
  axios
    .delete(`/api/hotels/delete/${idHotel}`)
    .then((res) => dispatch(listOfHotels()))
    .catch((err) => console.log(err));
};
//FIND HOTEL BY ID
export const findHotelById = (idHotel) => (dispatch) => {
  axios
    .get(`/api/hotels/find/${idHotel}`)
    .then((res) => dispatch(listOfHotels))
    .catch((err) => console.log(err));
};
