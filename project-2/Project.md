Project 2

Description

The project reads data from the data.json file and writes it to the index.html file. The index.html file contains a form as well as a number of filters for filtering data and displaying it in the table.

UI

The index.html file contains a form as well as a number of filters for filtering data and displaying it in the table.
The form has multiple filters with which each field of the table can be manipulated.
The first filter includes a select option with values (car VIN, Car Manufacturer, Car Model, car Model Year). You can choose any one of the options and filter data based on it.
The second filter is a range in which you can specify the starting and ending Car Model Year. All rows that fall within the specified range will be filtered based on the Car Model Year.

Logic

The getAllCars function takes multiple parameters and filters the data based on them.
The getByVin function takes a car VIN number parameter and returns a car with the provided VIN.

Architecture

The controller and data folders are located in the api folder.
The controller folder contains the functions used to implement the logic.
The data folder contains the data file from which the data is retrieved.
The main.js file is in charge of loading the data using the controllers.
Because browsers can only read html, the dist folder contains the bundle.js file, which bundles everything together.