import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react';
import { hotelReducer } from '../reducers/hotelReducer';
import {
  apiUrl,
  CREATE_HOTEL,
  FETCH_ALL_HOTEL,
  FETCH_ALL_HOTEL_SUCCESS,
  LOADING_HOTEL,
} from './constants';

export const HotelContext = createContext();

const HotelContextProvider = ({ children }) => {
  const [hotelState, dispatch] = useReducer(hotelReducer, {
    isLoading: true,
    hotels: [],
  });

  // fetch all hotels
  const fetchAllHotels = async () => {
    try {
      const response = await axios.get(`${apiUrl}/hotels`);
      dispatch({
        type: LOADING_HOTEL,
      });
      dispatch({
        type: FETCH_ALL_HOTEL,
        payload: {
          hotels: response.data,
        },
      });
      dispatch({
        type: FETCH_ALL_HOTEL_SUCCESS,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => fetchAllHotels, []);

  // create hotel
  const createHotel = async (hotel) => {
    try {
      await axios.post(`${apiUrl}/hotels`, hotel);

      dispatch({
        type: CREATE_HOTEL,
        payload: {
          hotel,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Context data
  const hotelContextData = { hotelState, fetchAllHotels, createHotel };

  // return provider
  return (
    <HotelContext.Provider value={hotelContextData}>
      {children}
    </HotelContext.Provider>
  );
};

export default HotelContextProvider;
