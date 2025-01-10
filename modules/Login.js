let users = JSON.parse(localStorage.getItem("users"))

let login = ()=>{
  let userName = document.getElementById("username").value ;
  let passWord = document.getElementById("password").value ;
  for(let i =  0 ; i<users.length ; i++){
    if(users[i].name == userName && users[i].password == passWord){
      return true ;
    }else{
      return false
    }
  }
}

export  {login}