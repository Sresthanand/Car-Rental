
const vehicleItems = document.getElementById("vehicleItems");
const fuelItems = document.getElementById("fuelItems");
const transmissionItems = document.getElementById("transmissionItems");
const daysItem = document.getElementById("days");


function calculatePrice() {
  console.log("Hi i am calculate!");
  var vehicle = vehicleItems.options[vehicleItems.selectedIndex].value;
  vehicle = parseInt(vehicle);
  switch (vehicle) {
    case 10:
      fuelItems.hidden = false;
      fuelItems.options[1].hidden = false;
      fuelItems.options[2].hidden = true;
      fuelItems.options[3].hidden = true;
      fuelItems.options[4].hidden = false;
      transmissionItems.hidden = true;
      break;
    case 12:
      fuelItems.hidden = false;
      fuelItems.options[1].hidden = false;
      fuelItems.options[2].hidden = false;
      fuelItems.options[3].hidden = false;
      fuelItems.options[4].hidden = false;
      transmissionItems.hidden = false;
      transmissionItems.options[1].hidden = false;
      transmissionItems.options[2].hidden = true;
      break;
    case 14:
      fuelItems.hidden = false;
      fuelItems.options[1].hidden = false;
      fuelItems.options[2].hidden = false;
      fuelItems.options[3].hidden = false;
      fuelItems.options[4].hidden = true;
      transmissionItems.hidden = false;
      transmissionItems.options[1].hidden = false;
      transmissionItems.options[2].hidden = true;
      break;
    case 16:
      fuelItems.hidden = false;
      fuelItems.options[1].hidden = true;
      fuelItems.options[2].hidden = false;
      fuelItems.options[3].hidden = true;
      fuelItems.options[4].hidden = true;
      transmissionItems.hidden = false;
      transmissionItems.options[1].hidden = false;
      transmissionItems.options[2].hidden = true;
      break;
    case 20:
      fuelItems.hidden = false;
      fuelItems.options[1].hidden = false;
      fuelItems.options[2].hidden = false;
      fuelItems.options[3].hidden = false;
      fuelItems.options[4].hidden = true;

      transmissionItems.hidden = false;
      transmissionItems.options[1].hidden = true;
      transmissionItems.options[2].hidden = false;
      break;

    case 250:
      fuelItems.hidden = false;
      fuelItems.options[1].hidden = true;
      fuelItems.options[2].hidden = false;
      fuelItems.options[3].hidden = true;
      fuelItems.options[4].hidden = true;

      transmissionItems.hidden = false;
      transmissionItems.options[1].hidden = true;
      transmissionItems.options[2].hidden = false;
      break;

    case 900:
      fuelItems.hidden = false;
      fuelItems.options[1].hidden = false;
      fuelItems.options[2].hidden = false;
      fuelItems.options[3].hidden = true;
      fuelItems.options[4].hidden = true;

      transmissionItems.hidden = false;
      transmissionItems.options[1].hidden = false;
      transmissionItems.options[2].hidden = true;
      break;

    default:
      break;
  }

  var fuel = fuelItems.options[fuelItems.selectedIndex].value;
  var transmission = transmissionItems.options[transmissionItems.selectedIndex].value;
  var days = daysItem.value;
  fuel = parseInt(fuel);
  transmission = parseInt(transmission);
  var total =
    (vehicle + (vehicle * fuel) / 100 + (vehicle * transmission) / 100) * days;
  total = total.toFixed(2);
  document.getElementById("rentPrice").value = total + " Rs";
}

function myFunction(){
  console.log("hii i am db of bookings")
}

function resetToDefault() {
  fuelItems.options[0].selected = true;
  transmissionItems.options[0].selected = true;
  daysItem.value = "1";
}