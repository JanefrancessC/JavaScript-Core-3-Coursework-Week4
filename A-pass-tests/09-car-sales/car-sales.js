function sales(carsSold) {
  let totals = {
    Ford: 0,
    Honda: 0,
    "Land Rover": 0,
    Toyota: 0,
  };

  carsSold.forEach((brand) => {
    if (brand.make === "Ford") {
      totals.Ford += brand.price;
    } else if (brand.make === "Honda") {
      totals.Honda += brand.price;
    } else if (brand.make === "Land Rover") {
      totals["Land Rover"] += brand.price;
    } else {
      totals.Toyota += brand.price;
    }
  });
  return totals;
}

//  let carsSold = [
//    { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
//    { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
//    { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
//    { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
//    { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
//    { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
//    { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
//  ];

// console.log(sales(carsSold));
module.exports = sales;
