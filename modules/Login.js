let users = JSON.parse(localStorage.getItem("users"))

let login = ()=>{
  let userName = document.getElementById("username").value ;
  let passWord = document.getElementById("password").value ;
  
  let userFound = undefined;

  users.forEach(user => {
      if(user.name === userName && user.password === passWord) {
          userFound = user.name;
      }
  });
  
  return userFound;
  }

export  {login}


// users => {}