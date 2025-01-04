import filterData from './search.js'


document.getElementById("search_btn").addEventListener("click", ()=>{
    filterData().then((fd)=>{
        console.log(fd);
    })
})