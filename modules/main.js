import {filterData} from './search.js'


document.getElementById("search_btn").addEventListener("click", ()=>{
    let fd= filterData()
    console.log(fd);
})