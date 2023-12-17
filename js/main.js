let Username = ""

while (true)
{
    Username = prompt("Введи своє ім'я")
    if (Username) {
        if (Username.length) break;
    }
    
}
document.getElementById("Inputluck").innerHTML = `Вітаю, ${Username}, на моїй сторінці!`

/*console.log(Username)*/
alert(`Вітаю, ${Username}, на моїй сторінці!`)