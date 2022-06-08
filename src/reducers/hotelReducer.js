import {
  CREATE_HOTEL,
  FETCH_ALL_HOTEL,
  FETCH_ALL_HOTEL_SUCCESS,
  LOADING_HOTEL,
} from '../contexts/constants';

export const hotelReducer = (state, action) => {
  const {
    type,
    payload: { hotels },
  } = action;

  switch (type) {
    case FETCH_ALL_HOTEL:
      return {
        ...state,
        hotels,
      };
    case FETCH_ALL_HOTEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case LOADING_HOTEL:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_HOTEL:
      return {
        ...state,
        hotels: [...state.hotels, action.payload.hotel],
      };
    default:
      return state;
  }
};
