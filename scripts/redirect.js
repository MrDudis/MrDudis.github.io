$(document).ready(function () {

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    var firebaseConfig = {
        apiKey: "AIzaSyCM7xSnfZSPXwXDdVEbDr8o0_gowEJ89rU",
        authDomain: "b1t-discord.firebaseapp.com",
        databaseURL: "https://b1t-discord.firebaseio.com",
        projectId: "b1t-discord",
        storageBucket: "b1t-discord.appspot.com",
        messagingSenderId: "509950332400",
        appId: "1:509950332400:web:da5af35ccf3f1eda81e135"
    };

    firebase.initializeApp(firebaseConfig)  

    const database = firebase.database()

    let id = getUrlParameter("name")
    if(!id) id = "404"

    id = id.toLowerCase()

    var ref = database.ref(`website/redirect/${id}`)

    ref.once("value", function(snapshot) {
        if(snapshot.exists()) {
            var data = snapshot.val()

            window.location.replace(data.link)

        }else {
            window.location.href = "/404";
        }
    })

})
