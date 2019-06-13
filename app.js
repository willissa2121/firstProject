


let database = firebase.database()


$("#submit-button").on("click", function () {
  let firstName = $("#registerFirstName").val()
  let lastName = $("#registerLastName").val()
  let email = $("#registerEmail").val()
  let password = $("#registerPassword").val()
  let address = $("#registerAddress").val()
  let city = $("#registerCity").val()
  let state = $("#registerState").val()
  let phone = $("#registerPhone").val()
  let userName = $("#registerUserName").val()

  database.ref(userName).push({

    firstName: firstName,
    lastName: lastName,
    username : userName,
    email: email,
    password: password,
    address : address,
    city : city,
    state: state,
    phone: phone

  })


})


$("#sign-in").on("click", function(){

  let username = $("#userName").val()
  database.ref().on("value", function(data){
    console.log(data.val())
    // console.log(Object.keys(data.val()))

  })
})


