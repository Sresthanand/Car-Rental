let db = null;

const request = indexedDB.open("MyDatabase");

request.onupgradeneeded = (event) => {
   console.log("Hiii@on")
  const db = event.target.result;
  const objectStore = db.createObjectStore("users", { keyPath: "id" });
  const objectStoreForCars = db.createObjectStore("cars", { keyPath: "id" });
  const objectStoreForBookings = db.createObjectStore("bookings", {
    keyPath: "id",
  });
  console.log("Hiii@on-done")
};

// request.oncomplete = function(event){
//   console.log('hi from admin');
//   let objectStore = db
//   .transaction("users", "readwrite")
//   .objectStore("users");
//   objectStore.add({
//     id: Date.now(),
//     Email: "admin@gmail.com",
//     Password: "Admin@123",
//     isAdmin: "true",
//   });
// }

request.onsuccess = function (event) {
  db = event.target.result;
};

request.onerror = function (event) {
  console.log(event);
};
