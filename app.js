
let looper = 0

let database = firebase.database()

let pushData = (firstName, lastName) => {

}



// Checks Username upon registering. Will return either true or false
let checkUserName = () => {

  let firstName = $("#registerFirstName").val()
  let lastName = $("#registerLastName").val()
  let email = $("#registerEmail").val()
  let password = $("#registerPassword").val()
  let address = $("#registerAddress").val()
  let city = $("#registerCity").val()
  let state = $("#registerState").val()
  let phone = $("#registerPhone").val()
  let userName = $("#registerUserName").val()


  let count = 0;
  let looper = 0;

  database.ref().on("value", function (data) {

    looper++

    let value = data.val()
    console.log(data.val())
    let keysArray = Object.keys(value);






    for (var i = 0; i < keysArray.length; i++) {

      if (keysArray[i] === userName) {

        console.log("checked")
        count = 1
        stop()

      }


    }

    if (count === 0) {
      console.log("pushing")

      pushData()


      database.ref(userName).push({

        firstName: firstName,
        lastName: lastName,
        username: userName,
        email: email,
        password: password,
        address: address,
        city: city,
        state: state,
        phone: phone

      })

    }

    else if (count === 1 && looper === 1) {

      $(".container").attr("id", "shake-me")
      $("#change-title").text("Please Choose a Different Username")
      $("#change-title").css("color", "red")
      $("#transfer-button").attr("href", "#")
      setTimeout(function () {
        $(".container").attr("id", "")


      }, 1000)
      setTimeout(function () {
        $("#change-title").css("color", "#1DB954")
        $("#change-title").text("Sign Up")
      }, 2000)

    }

  })
}


let checkSignIn = () => {
  let userSignIn = $("#userName").val().trim()
  let userPassword = $("#user-password").val().trim()

  database.ref().on("value", function (data) {
    let keys = Object.keys(data.val());
    for (var i = 0; i < keys.length; i++) {
      console.log(keys)
      console.log(userSignIn)
      if (userSignIn == keys[i]) {

        database.ref(userSignIn).on("value", function (data) {
          let userKeysArray = Object.keys(data.val())
          console.log(data.val()[userKeysArray[0]].password)
          console.log(userPassword)

          if (userPassword == data.val()[userKeysArray[0]].password) {
            console.log("loading correctly")
          }
          else {
            $(".container").attr("id", "shake-me")
            $("#change-title-sign-in").text("Incorrect Username Or Password")
            $("#change-title-sign-in").css("color", "red")
            $("#transfer-button").attr("href", "#")
            setTimeout(function () {
              $(".container").attr("id", "")


            }, 1000)
            setTimeout(function () {
              $("#change-title-sign-in").css("color", "#1DB954")
              $("#change-title-sign-in").text("Sign Up")
            }, 2000)
          }
        })
      }
    }
  })

}





//start of next part of function, put ins ame function due to asyncrhonous check






$("#submit-button").on("click", function () {

  checkUserName()

})


$("#sign-in").on("click", function () {

  checkSignIn()

})









