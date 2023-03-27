let name = document.getElementById("name");
let email = document.getElementById("email");
console.log(document.getElementById("name").value)

let submit = document.getElementById("submit")
const form = document.getElementById("og-form")


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(document.getElementById("name").value === ''  || document.getElementById("email").value === ""){
        //console.log("empty")

        let message = document.getElementById("error-msg")
        message.classList.add("error")
        message.innerHTML = "Add two fields"
        setTimeout(() => message.innerHTML="", 3000);
        // message.classList.add("error")
        // message.innerHTML = "add two fields"
        // setTimeout(() => message.remove(), 3000);

    }else{
        let userList = document.getElementById("users")
        const childele = document.createElement('li')
        
        childele.appendChild(document.createTextNode(`${document.getElementById("name").value} : ${document.getElementById("email").value}`))
        userList.appendChild(childele)
        document.getElementById("name").value = ''
        document.getElementById("email").value = ''
    }
    
})