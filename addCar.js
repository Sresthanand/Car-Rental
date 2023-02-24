
let idb = indexedDB.open("MyDatabase");
idb.onsuccess = function () {
  let db = idb.result;
  let tx = db.transaction("cars", "readwrite");
  let myObjectStore = tx.objectStore("cars");
  let requests = myObjectStore.openCursor();
  let cars = [];


  requests.onsuccess = (e) => {

    let cursor = requests.result;
    if (cursor) {
      if (true) {
        cars.push(cursor.value);
      }
      cursor.continue();
    }
    
    const carShow = document.getElementById("Add-cars");
      let html = "";
      cars.forEach((carDetails) => {
        html+=`
        <div class="box">
        <div class="box-img">
          <img src="/img/car6.jpg" alt="" />
        </div>
        <p>${carDetails.Year}</p>
        <h3>${carDetails.CarName}</h3>
        <h2>${carDetails.Cost} <span>/Day</span></h2>
        <h2>${carDetails.NumberofSeatsInCar} seater | ${carDetails.TypeOfCar} | ${carDetails.Details}</h2>
        <a href="BookingDetails.html" class="btn">Rent Now</a>
      </div>`;
      });
      carShow.innerHTML = html;
  };
};


