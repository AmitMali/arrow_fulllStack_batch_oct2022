//fetch data from the url
function fetchData(username) {
  const base_url = `https://api.github.com/users/${username}`;
  const resp = fetch(base_url);
  return resp;
}

//asynch function to handle data
const loadGithubUserInfo = async (username) => {
  const response = await fetchData(username);
  const result = await response.json();
  document.getElementById("showUser").innerHTML = `
  <div class="card" style="width: 18rem;">
            <img src="${result.avatar_url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${result.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="${result.url}" class="btn btn-primary">Go Gihub</a>
            </div>
          </div>`;
};

loadGithubUserInfo("AmitMali");
