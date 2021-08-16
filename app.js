const date = document.getElementById("date");
const button = document.getElementById("submit");
const lNumber = document.getElementById("number");
const output = document.getElementById("output");


//Submit btn click handler for checking lucky birthdate
function clickHandler() {
    const userDate = date.value.split("-");
  
    const year = parseInt(userDate[0]); //year
  
    const month = parseInt(userDate[1]); //month
  
    const day = parseInt(userDate[2]); //day

//finding sum of digits of birthday is divisible by their lucky number
  const luck = year + month + day;
  const number = lNumber.value;