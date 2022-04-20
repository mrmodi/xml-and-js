const cars = require("../data/MOCK_DATA.json");
const getAllCars = (term, valueTerm) =>
new Promise((resolve) => {
  let data = array.form(cars);

  if(term) {

      switch(term) {
          case "car_vin":
              data = data.filter((car) => car.car_vin.toLowerCase().includes(valueTerm));
              break;
          case "car_manufacturer":
              data = data.filter((car) => car.car_manufacturer.toLowerCase().includes(valueTerm));
              break;
          case "car_model":
              data = data.filter((car) => car.car_model.toLowerCase().includes(valueTerm));
              break;
          case "car_model_year":
              data = data.filter((car) => car.car_model_year.toLowerCase().includes(valueTerm));
             
          default:
              // do nothing
              break;
      }
  }

 // filter year range
  if (manufacturing_from && manufacturing_from != "" && manufacturing_to && manufacturing_to != "") {
      data = data.filter(({car_model_year}) => car_model_year >= manufacturing_from && car_model_year <= manufacturing_to);
  }
      resolve({ data: data });
  });

  const getByVin = (car_vin) =>
new Promise((resolve) => {
  const car = cars.find((car) => car.car_vin === car_vin);

  if (car) {
      resolve({code:200 ,data: Array(car) });
  } else {
      resolve({
          code:400,
          data: { message: `No car found for VIN number ${car_vin}` },
      });
  }
});

module.exports = {
  getAllCars,
  getByVin,
};