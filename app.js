console.log("working Properly")

var innerValue; 

var mainDiv = document.createElement("div")
document.body.appendChild(mainDiv)


function userData( id, employeename, fathername, email, address, designation, experience, salary){


this.id = id,
this.employee = employeename,
this.father = fathername,
this.email = email,
this.address = address,
this.designation = designation,
this.experience = experience,
this.salary = salary
}


var data = new userData(1,"Salman Zafar", "Muhammad Zafar", "salmanzafar@gmail.com", "8/93 Gulshan Karachi", "None" , "6 Year Experience" , '70k')





for(var key in data){
var span = document.createElement("div")
span.setAttribute("class","color")
span.style.backgroundColor = "royalblue"
span.style.fontSize = "20px"
span.style.display = "flex"
span.style.justifyContent = "center"
 span.textContent = `${key}  :   ${data[key]}  `
 console.log(span)
document.body.appendChild(span)
    // document.createElement
}


// var z = function RestaurantMenu(){

// "name" = "kabab Jee",
// // "top" = [
// //  "item1" : "biryani",
// //  "item2": "niha",
// //  "item3" : "Pulao",
// // ]


// }



// middle = {

//     item1 : "biryani1",
//     item2 : "niha1",
//     item3 : "Pulao1",

// }


// best  = {

//     item1 : "biryani2",
//     item2 : "niha2",
//     item3 : "Pulao2",


// }

// }

// console.log(z)

// for(var key in z ){
//     console.log(key)
// }




function RestaurantMenu (name, biryani , Pulao , nihari , paye ,colddrink){

this.Name = name,
this.Biryani = biryani,
this.Pulao = Pulao,
this.Nihari = nihari,
this.Paye = paye,
this.ColdDrink = colddrink



}


var restoPrice =  new RestaurantMenu ("The Kabab Jee" , `40 RS`,`50 RS`,`70 RS`, `80 RS`,`300 RS`  )




for(var key in  restoPrice){
var innerDic = document.createElement("div")
mainDiv.appendChild(innerDic)
innerDic.style.backgroundColor = "red"
innerDic.style.display = "flex"
innerDic.style.justifyContent = "center"
innerDic.style.fontSize = "20px"
innerDic.textContent = key + " : " + restoPrice[key]

    }