const headingData = document.querySelectorAll(".heading-data")
const paraData = document.querySelector(".para-data")
const icon = document.querySelector(".icon")

headingData.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        let nextData = e.target.nextElementSibling
        // console.log(nextData);
        nextData.classList.toggle("para-data-value")

        if(e.target.nextElementSibling.classList.contains("para-data-value")){
            e.target.children[0].innerHTML = '<img src="./assets/images/icon-minus.svg" alt="">'
            // console.log(e.target.children[0].innerHTML);
        }
        else{
            e.target.children[0].innerHTML= `<img src="./assets/images/icon-plus.svg" alt="">`
            // console.log(e.target.children[0].innerHTML);
        }

    })
})