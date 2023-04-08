const firebaseURL = "https://freedom-648a1-default-rtdb.firebaseio.com/lesson.json"

// POST
async function postRequest(data){

    fetch(firebaseURL,{
        method: "POST",
        body: JSON.stringify(data)
    })
}


const btn = document.getElementById("btn")
btn.addEventListener("click", ()=>{

    const inpName = document.getElementsByTagName("input")[0]
    const inpAge = document.getElementsByTagName("input")[1]
    const inpEmail = document.getElementsByTagName("input")[2]
    const inpCity = document.getElementsByTagName("input")[3]
    const inpDateFrom = document.getElementsByTagName("input")[4]
    const inpDateTo = document.getElementsByTagName("input")[5]
    const inpLanguage = document.getElementsByTagName("input")[6]

    const obj = {
        userName: inpName.value,
        age: inpAge.value,
        email: inpEmail.value,
        city: inpCity.value,
        from: inpDateFrom.value,
        to: inpDateTo.value,
        language: inpLanguage.value,
        id: Math.random()
    }
    console.log(obj);
    inpName.value = ""
    inpAge.value = ""
    inpEmail.value = ""
    inpCity.value = ""
    inpDateFrom.value = ""
    inpDateTo.value = ""
    inpLanguage.value = ""
    postRequest(obj)
    getModal()

})

let modal = document.getElementById("modal")
let modalText = document.getElementById("modalText")



const getModal = async function (){
    try {
        const data = await fetch("https://freedom-648a1-default-rtdb.firebaseio.com/lesson.json", {
        headers:{
        "Content-Type": "application/json"
        }
        })
        modal.style.display = "block";
        setTimeout(() => {
            clearTimeout(modal.style.display = "none")
            
          }, 3000);
          
        
    } catch (error) {
        modal.style.display = "block"
        modalText.innerHTML = "Error!!!"
        modal.className = "redModal"
        setTimeout(() => {
            clearTimeout(modal.style.display = "none")
            
          }, 3000);
    }
}
