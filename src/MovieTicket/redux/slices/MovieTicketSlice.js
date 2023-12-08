// import { createSlice } from '@reduxjs/toolkit';

// const MovieTicketSlice = createSlice({
//   name: 'MovieTicket',
//   initialState: {
//     selectedSeats: [],
//     totalPrice: 0,
//   },
//   //key la obj
//   reducers: {
//     selectSeat: (state, action) => {
//       const { isSelected, ...seat } = action.payload;

//       if (isSelected) {
//         const selectedSeats = [...state.selectedSeats, seat];
//         const totalPrice = state.totalPrice + seat.price;
//         return { ...state, selectedSeats, totalPrice };
//       }

//       const selectedSeats = state.selectedSeats.filter(
//         (item) => item.id !== seat.id
//       );
//       const totalPrice = state.totalPrice - seat.price;
//       return { ...state, selectedSeats, totalPrice };
//     },
//     removeSeat: (state, action) => {
//       const seat = action.payload;
//       const selectedSeats = state.selectedSeats.filter(
//         (item) => item.id !== seat.id
//       );
//       const totalPrice = state.totalPrice - seat.price;
//       return { ...state, selectedSeats, totalPrice };
//     },
//   },
// });
// export const { selectSeat, removeSeat } = MovieTicketSlice.actions;
// export default MovieTicketSlice.reducer;
