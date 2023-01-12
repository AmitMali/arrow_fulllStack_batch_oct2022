//promise example
function loadData(num) {
  let result = new Promise(function (resolve) {
    if (num % 2 == 0) {
      resolve("even");
    } else {
      resolve("odd");
    }
  });

  return result;
}

// loadData(3)
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));

async function result(num) {
  let result = await loadData(num);
  console.log(result);
}

result(2);
result(3);
