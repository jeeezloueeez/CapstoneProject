The Dad Depot is an application that has four main features:

1. It takes in a product ID number and sends a GET request from the front end to the backend which then handles the request by making another GET request to The Home Depot API to ask for all the information it has about the product that has the matching ID number.
2. Once it has that information, the backend of the application destructures the information and grabs three particular pieces of information; The image of the product, the name of the product and the price of the product. The back end then sends that information to the frontend and the front end creates a new div in the DOM that will stylize and show those three things in the application.
3. To store the list that was created by the user there is a save button that sends a POST request to the backend that will allow the user to save the ID numbers of each product into a list that is then posted in the web application as well and is there regarless of if the user makes new lists.
4. There is also a delete button that will delete the items in reverse chronological order.

This application was designed to help contractors who make estimates for construction-type jobs to be able to quickly find the products from The Home Depot and calculate their bids efficiently in order to reduce the time it takes to make an estimate and be able to make more than they used to be able to.

The Product ID's that you will need to use if you are looking at The Home Depot website will the the ID number labeled 'Internet'.

This application uses RESTapi's, mainly GET, POST and DELETE.

The dependencies that are used in this application are the EXPRESS package, as well as AXIOS and DOTENV. You will need to remember to run the npm i command prior to doing anything so that you can have these dependencies in your library. Currently, this application will need you to make a .env file that has your own personal API_KEY that has access to The Home Depot API and a PORT that matches the port that the server is listening on.

You will be all set after that! Don't forget to start your server using the nodemon server/server.js command in your terminal. Have fun saving all the lists you want from The Home Depot store!
