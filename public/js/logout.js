const logout = document.querySelector("#logout");
console.log("logout : ",logout)
if(logout){
    logout.addEventListener('click',() => {
        fetch('/logout',{method : 'POST'}).then(() => {
            window.location.reload()
        })
    })
}