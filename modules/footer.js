fetch('../components/footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_footer");
    let newelem = document.createElement("footer");
    newelem.classList.add('about-us-section');
    newelem.id = 'about-us-section';
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})