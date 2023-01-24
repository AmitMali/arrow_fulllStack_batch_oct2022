function loaddata() {
  const xmlhttp = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/users";
  xmlhttp.open("GET", url);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    const resp = JSON.parse(xmlhttp.response);
    let output = `<thead>
    <th>id</th>
    <th>Name</th>
    <th>Eamil</th>
    <th>Phone</th>
    <th>Webiste</th>
  </thead>`;
    const table = document.getElementById("responceElement");
    resp.forEach((user) => {
      output += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
    </tr>`;
    });
    document.getElementById("responceElement").innerHTML = output;
  };
}
document.getElementById("loaddata").addEventListener("click", loaddata);
