<<<<<<< HEAD
export function getAdat(vegpont, fveny) {
  fetch(vegpont, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error)=>console.log(error))
}
=======
export function getAdat(vegpont, callback) {
  fetch(vegpont, {
    method: "GET"
  })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
}

//fetch().then().then().catch()

export function postAdat(vegpont,adat) {
    fetch(vegpont, {
      method: "POST",
      body: JSON.stringify(adat),/* adat objektumot átalakítja json szöveggé */
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  export function deleteAdat(vegpont,id) {
    fetch(vegpont+"/"+id, {
      method: "DELETE",
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  export function putAdat(vegpont,adat,id) {
    fetch(vegpont+"/"+id, {
      method: "PUT",
      body: JSON.stringify(adat),/* adat objektumot átalakítja json szöveggé */
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
>>>>>>> 99c6ae745edd232395b10fd4d1ea5d2bb347119f
