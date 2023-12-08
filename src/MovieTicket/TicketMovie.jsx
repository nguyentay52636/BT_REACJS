import React from 'react';
import ListSeat from './SeatList';
import data from './data.json';
import Tickets from './Tickets';

export default function TicketMovie() {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ListSeat seats={data} />
          </div>
          <div className="col-md-4">
            <Tickets />
          </div>
        </div>
      </div>
    </div>
  );
}
