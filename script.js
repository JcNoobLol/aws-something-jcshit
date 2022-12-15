let obeserv = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    
    })
})
let hidden = document.querySelectorAll(".main")
hidden.forEach((el) => obeserv.observe(el));
let image = document.querySelectorAll(".image")
image.forEach((el) => obeserv.observe(el));