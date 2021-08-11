const callAPiData = async () => {
  fetch("https://api.deezer.com/search?q=eminem", {
    headers: {
      "x-rapidapi-key": "{x-rapidapi-key}",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((apiData) => {
      //displayapiData(apiData);
      console.log(apiData);
    })
    .catch((err) => console.log(err));
};

const displayapiData = (apiData) => {
  let element = document.querySelector(".row");

  element.innerHTML += `
                  <div class="card mb-3" style="max-width: 540px">
                  <div class="row g-0">
                      <div class="col-md-4">
                      <img src="" class="img-fluid rounded-start" alt="..." />
                      </div>
                      <div class="col-md-8">
                      <div class="card-body">
                          <h5 class="card-title">FullName: </h5>
                          <p class="card-text">
                          Phone: 
                          </p>
                          <p class="card-text">
                          <small class="text-muted">FullName: </small>
                          </p>
                          
                      </div>
                      </div>
                  </div>
                  </div>
                  `;
};

async function data() {
  // data = async ()
  let url = "https://randomuser.me/api";
  const data = await fetch(url);
  const dataApi = await data.json();
  console.log("apiData: ", dataApi);
}
window.onload = () => {
  callAPiData();
  //displayapiData();

  data();
};
