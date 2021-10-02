document.querySelector("button").addEventListener("click", searchCrypto);

function searchCrypto() {
  let crypto = document.querySelector("#crypto").value;
  const url = `https://api.lunarcrush.com/v2?data=assets&key=k96npx36n1gh1i0y5j63d&symbol=${crypto}`;

  fetch(url)
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
      if (data.data[0].high > 1) {
        document.querySelector("#content").innerHTML =
          "Today's value is " + Math.floor(data.data[0].high);
      } else {
        document.querySelector("#content").innerHTML =
          "Today's value is " + data.data[0].high;
      }
    })
    .catch((err) => {
      document.getElementById("content").innerHTML =
        "Error - couldn't find results, sorry!";
    });
}
