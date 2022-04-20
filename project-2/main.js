const { getAllCars, getByVin } = require("./api/controller/car");

const renderTable = (data) => {
    const tableBody = document.getElementById("table-body");

    if (!tableBody) {
        throw new Error("No table element found");
      }

      const rows = data.reduce(
        (acc, { car_vin, car_manufacturer, car_model, car_model_year }) =>
          acc +
          `<tr>
            <td>${car_vin}</td>
            <td>${car_manufacturer}</td>
            <td>${car_model}</td>
            <td>${car_model_year}</td>
        </tr>`,
        ``
      );
    
      tableBody.innerHTML = rows;
    };

    getAllCars().then(({ data }) => renderTable(data)); 

    const onSubmit = (event) => {
        event.preventDefault();
        const term = event.target.filters.value;
      
        const manufacturing_from = event.target.manufacturing_from.value;
        const manufacturing_to = event.target.manufacturing_to.value;
       
                
        const valueTerm = event.target.input.value;
        
        if(term === `car_vin`) {
            getByVin(valueTerm).then(({ data }) => renderTable(data));
            
            getAllCars(term, car_vin ,car_manufacturer,manufacturing_from, manufacturing_to,car_model ,car_model_year, valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
        }
      };
      
      const onReset = () => {
        window.location.replace(window.location.pathname);
        getAllCars().then(({ data }) => renderTable(data));
      };
      
      document.getElementById("myForm").addEventListener("submit", onSubmit);
      document.getElementById("myForm").addEventListener("reset", onReset);
      
    

