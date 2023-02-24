


let idb = indexedDB.open("MyDatabase");
idb.onsuccess = function () {
  let db = idb.result;
  let tx = db.transaction("bookings", "readwrite");
  let myObjectStore = tx.objectStore("bookings");
  let requests = myObjectStore.openCursor();
  let bookings = [];

  requests.onsuccess = (e) => {
 
    let cursor = requests.result;
    if (cursor) {
      if (true) {
        bookings.push(cursor.value);
      }
      cursor.continue();
    }



    const bookingsShow = document.getElementById("showBookings");
    let html = "";
    // console.log(cursor.value);
     const id = localStorage.getItem("user-id");
     console.log(id + " user-id");
     console.log(cursor.value.BookingId + " booking-id");
     
    bookings.forEach((bookingDetails) => {

      if(id == bookingDetails.BookingId){
        console.log("Hello!")
      html += `
        <ul style="list-style-type: none; display: grid; grid-template-columns: repeat(8, 1fr); grid-gap: 10px; padding: 0;">
        <li style="background-color: #F2F2F2; padding: 10px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">Booking id: ${bookingDetails.id} </li>
        <li style="background-color: #F2F2F2; padding: 10px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">Days:${bookingDetails.Days} </li>
        <li style="background-color: #F2F2F2; padding: 10px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">Type Of fuel:${bookingDetails.FuelType} </li>
        <li style="background-color: #F2F2F2; padding: 10px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">Fare:${bookingDetails.fare}</li>
        <li style="background-color: #F2F2F2; padding: 10px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">Location: ${bookingDetails.location}</li>
        <li style="background-color: #F2F2F2; padding: 10px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">Type Of Car:${bookingDetails.Type} </li>
        <li style="background-color: #F2F2F2; padding: 10px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">Type Of Transmission:${bookingDetails.typeOfTransmission} </li>
        <!-- <li style="background-color: #F2F2F2; padding: 10px; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">Column 8</li> -->
      </ul>`;
    }

      
    });
  
    bookingsShow.innerHTML = html;
  };
};
