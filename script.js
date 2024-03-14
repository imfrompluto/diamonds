let projects = document.getElementsByClassName("project")

function myFunction(){
    for (let card of projects){
        card.style.height = window.innerWidth/2+"px"
    }
}