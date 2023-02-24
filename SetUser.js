
let idb = indexedDB.open("MyDatabase");
idb.onsuccess = function () {
  let db = idb.result;
  let tx = db.transaction("users", "readwrite");
  let myObjectStore = tx.objectStore("users");
  let requests = myObjectStore.openCursor();
  let userArray = [];

  requests.onsuccess = (e) => {

    let cursor = requests.result;
    if (cursor) {
      if (true) {
        userArray.push(cursor.value);
      }
      cursor.continue();
    }
  };

  console.log(userArray);
};


