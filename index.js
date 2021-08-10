const callAPiData = async () => {
  let akonMusic = await fetch("https://api.deezer.com/search?q=eminem", {
    headers: {
      ContentType: "application/json; charset=utf-8",
      Cookie:
        "csrftoken=Nz44NWFP7wlUecHBGK9Stvm8jmVexlUniJRgyWx3KeQfu49XHp3h2dNalVvEn0zF; sessionid=4hwj4yrcuj40z355qpla4ytvusvb8jsl",
    },
  });
  let music = await akonMusic.json();
  console.log(music);
};
/*.then((response) => await response.json())
      .then((apiData) => {
        //displayapiData(apiData);
        console.log(apiData);
        //console.log("img", apiData.results[0].picture);
      })
      .catch((err) => console.log(err));*/

//callAPiData();

const displayapiData = (apiData) => {
  let element = document.querySelector(".row");

  element.innerHTML += `
                  <div class="card mb-3" style="max-width: 540px">
                  <div class="row g-0">
                      <div class="col-md-4">
                      <img src="${apiData.results[0].picture.medium}" class="img-fluid rounded-start" alt="..." />
                      </div>
                      <div class="col-md-8">
                      <div class="card-body">
                          <h5 class="card-title">FullName: ${apiData.results[0].name.first} ${apiData.results[0].name.last}</h5>
                          <p class="card-text">
                          Phone: ${apiData.results[0].cell}
                          </p>
                          <p class="card-text">
                          <small class="text-muted">FullName: ${apiData.results[0].name.first} ${apiData.results[0].name.last}</small>
                          </p>
                          
                      </div>
                      </div>
                  </div>
                  </div>
                  `;
};

window.onload = () => {
  callAPiData();
  //displayapiData();
};
