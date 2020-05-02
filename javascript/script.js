let content_items = document.querySelectorAll('.content-item-wrapper');
//console.log(content_items);
content_items.forEach(item=>{
    //console.log(item.childNodes[1]);
    item.addEventListener('mouseover', ()=>{
        item.childNodes[1].classList.add('image-blur');
    })
    item.addEventListener('mouseout', ()=>{
        item.childNodes[1].classList.remove('image-blur');
    })
    
})