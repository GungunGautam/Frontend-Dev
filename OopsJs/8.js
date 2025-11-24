class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function() {
  console.log(`Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ${this.price}`);
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, fee) {
    super(movieName, seatNo, price);
    this.convenienceFee = fee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const ticket = new OnlineTicket("Pathaan", "A10", 200, 20);
ticket.printTicket(); // prototype chain
console.log(ticket.getTotalAmount());
