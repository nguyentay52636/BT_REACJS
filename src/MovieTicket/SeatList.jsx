import React from 'react';
import SeatItem from './SeatItem';
import { useSelector } from 'react-redux';
import Style from './Style.css';

export default function SeatList({ seats }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const selectedStates = useSelector((state) => {
    return state.movieTicket.selectedSeats;
  });

  return (
    <div>
      <h1 className="text-center text-warning mb-5">ĐẶT VÉ XEM PHIM</h1>

      <h5 className=" text-center text-white">Màn hình</h5>
      <div className="row">
        <div className="screen col-12 bg-warning p-4 mb-4 "></div>
        <div className="numberList">
          {numbers.map((number) => {
            return <div className="number text-white">{number}</div>;
          })}
          {/* {seats.map((seat) => {
            return (
              <>
                <div className="listCol">
                  <h5 className="text-white">{seat.row}</h5>;
                </div>
              </>
            );
          })} */}
        </div>
        <div className=""></div>
        <div className="content__seat">
          {seats.map((row) => (
            <div key={row.row} className="row">
              {row.seats.map((seat) => {
                const found = selectedStates.find(
                  (item) => item.name === seat.name
                );

                return (
                  <div key={seat.name} className="col-1">
                    <SeatItem seat={seat} isSelected={!!found} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
