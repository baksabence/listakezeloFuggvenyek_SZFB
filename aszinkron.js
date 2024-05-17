export function getAdat(vegpont, fveny) {
  fetch(vegpont, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error)=>console.log(error))
}
