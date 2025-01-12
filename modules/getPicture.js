export function getPicture () {
    return fetch('https://api.unsplash.com/photos/random?client_id=IXemSLBTi_dgjZ92JS7CFEKqSyWrMIs7Tk5U4vMWvcc&query=real+estate&count=30')
    .then(res => res.json())
    .then(data =>{
        let downloadLinks=[]
        data.forEach(object => {
            downloadLinks.push(object.urls.small)
        })
        return downloadLinks
    })
}