document.getElementById("lightskin").addEventListener("change",changeTheme);

function changeTheme(event){
    const selector = event.target.value
    if (selector == "dark" ){
        document.getElementById("logo").src = "byui-logo_white.png"
    }
    else{
        document.getElementById("logo").src = "byui-logo_blue.webp"
        
    }
    document.body.className = selector
}

