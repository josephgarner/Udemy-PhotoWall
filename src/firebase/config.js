import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAQNxuOYQFcTNti61pFLcslrj0keIYe5bM",
  authDomain: "photowalludemy.firebaseapp.com",
  databaseURL: "https://photowalludemy.firebaseio.com",
  projectId: "photowalludemy",
  storageBucket: "photowalludemy.appspot.com",
  messagingSenderId: "418959265596",
  appId: "1:418959265596:web:c68978a69c646ee16e1839",
  measurementId: "G-8QYFRM96T2"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}