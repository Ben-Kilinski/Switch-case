
//task 1
function task1(){
    let userNum = +prompt("insert a number please :)")
    switch (userNum) {
        case 3: 
        console.log("peace");
            return
        case 5: console.log("Bye");
            return
        case 7: console.log("Thanks bro");
            return
        default: console.log("No relevant message :(")
    }
}
// task1()

//task 2
function task2 (){
    let userName = prompt("insert a name please :)")
    switch (userName){
        case "jacob": console.log(userName)
        return
        case "Nathan": console.log(userName.toUpperCase())
        return
        case "DALYA": console.log(userName.toLowerCase())
        return
        default: console.log("No relevante message :_:")
    }
}
task2()
