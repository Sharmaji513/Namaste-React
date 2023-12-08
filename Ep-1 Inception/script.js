   // using React..... 
   const heading = React.createElement(
    "h1",
    {id:"heading" },
    "Namaste Everone from  React!");
    console.log(heading); //object

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(heading); 