import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { listOfHotels } from "../../redux/actions/hotelAction";
import HotelCard from "./HotelCard";

const HotelList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOfHotels());
  }, []);

  const hotels = useSelector((state) => state.hotels.hotels);
  console.log(hotels && hotels, "testt");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {hotels &&
        hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
    </div>
  );
};

export default HotelList;
