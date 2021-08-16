const date = document.getElementById("date");
const button = document.getElementById("submit");
const lNumber = document.getElementById("number");
const output = document.getElementById("output");

//Submit btn click handler for checking lucky birthdate
function clickHandler() {
  const userDate = date.value.split("-");
  // console.log(userDate);
  const year = parseInt(userDate[0]); //year
  // console.log(userDate[0]);
  const month = parseInt(userDate[1]); //month
  // console.log(userDate[1]);
  const day = parseInt(userDate[2]); //day
  // console.log(userDate[2]);

  //finding sum of digits of birthday is divisible by their lucky number
  const luck = year + month + day;
  const number = lNumber.value;

  if (luck % number === 0 || luck % number === 5) {
    output.innerHTML = `<p class="img-para">YEAH! Your Birthdate is Lucky XD</p>`;
  } else {
    output.innerHTML = `
    <p class="img-para">OOPS! Your Birthdate is not Lucky ;(</p>`;
  }
}

button.addEventListener("click", clickHandler);
