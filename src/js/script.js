init()

function init() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyA96r1tgimh6q0HzFWBTfjz0JAi-DxAzMc",
        authDomain: "reservas-fb141.firebaseapp.com",
        databaseURL: "https://reservas-fb141.firebaseio.com",
        projectId: "reservas-fb141",
        storageBucket: "reservas-fb141.appspot.com",
        messagingSenderId: "124041533280",
        appId: "1:124041533280:web:c1df7d5227a133f513f005",
        measurementId: "G-G2V8SNPK8N"
    };
    // Initialize Firebase
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
}
