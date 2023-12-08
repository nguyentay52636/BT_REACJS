import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function Tickets() {
  const selectedSeats = useSelector((state) => {
    return state.movieTicket.selectedSeats;
  });

  // Tính tổng tiền
  const totalPrice = selectedSeats.reduce(
    (total, seat) => total + seat.price,
    0
  );
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch({ type: 'movieTicker/RemoveSeat', payLoad: item });
  };
  return (
    <div className="bg-dark">
      <h3 className=" text-light">DANH SÁCH GHẾ BẠN CHỌN</h3>

      <div>
        <button className="btn btn-danger m-2 p-3"></button>
        <span className="text-light">Ghế đã đặt</span>
      </div>

      <div>
        <button className="btn btn-success m-2 p-3"></button>
        <span className="text-light"> Ghế đang chọn</span>
      </div>

      <div>
        <button className="btn btn-light m-2 p-3"></button>
        <span className="text-light"> Ghế chưa chọn</span>
      </div>

      <table className="table ">
        <thead>
          <tr>
            <th className="text-light">Số ghế</th>
            <th className="text-light">Giá</th>
            <th className="text-light">Hủy</th>
          </tr>
        </thead>
        <tbody>
          {selectedSeats.map((item) => (
            <tr key={item.name}>
              <td className="text-warning">{item.name}</td>
              <td className="text-warning">{item.price}VND</td>
              <td>
                <button
                  className="btn btn-danger bg-danger"
                  onClick={() => handleRemove(item)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="text-light">Tổng tiền</td>
            <td className="text-warning">{totalPrice}VND</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
