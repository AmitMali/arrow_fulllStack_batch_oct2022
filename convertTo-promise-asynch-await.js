//   You have to convert this callback to promise and then the promise into async await

// function CheckStringIsPallindrome(str){
//     let strRrv=str.split("").reverse().join("");
//     if(strRrv==str){
//       cb(null,"Pallindorme")
//     }else{
//           cb(new Error("No"),null)

//     }

//   }

// Convert above code into promise and then to async await

//   promise solution
const CheckStringIsPallindrome = (str) => {
  return new Promise((resolve, reject) => {
    let strRrv = str.split("").reverse().join("");
    if (strRrv == str) {
      resolve("Pallindorme");
    } else {
      reject("No");
    }
  });
};

// CheckStringIsPallindrome("aibohpdddhobia")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const isPallindrome = async (str) => {
  try {
    let result = await CheckStringIsPallindrome(str);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

isPallindrome("aibohphobia");
