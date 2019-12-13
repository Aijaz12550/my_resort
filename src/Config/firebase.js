import * as firebase from 'firebase'
import { promised } from 'q';
// import { promised } from 'q';
// import { resolve } from 'path';

// import * as firebase from 'firebase'

const config ={

    apiKey: "AIzaSyDujSCDDO_r4RGLhyYk5Eklo5zkWfADwx4",
    authDomain: "dream-world-d2cc2.firebaseapp.com",
    databaseURL: "https://dream-world-d2cc2.firebaseio.com",
    projectId: "dream-world-d2cc2",
    storageBucket: "dream-world-d2cc2.appspot.com",
    messagingSenderId: "1030010325982",
    appId: "1:1030010325982:web:b35a557c4cdf4337"
}
const app = firebase.initializeApp(config)
// function login(email,password){
//  app.auth()
// }

// function getAllusers(){
// return new promise((resolve,reject)=>{

//     app.database().collection('users').get().then(snapshot=>{
//         snapshot.forEach(elem=>{
//             console.log('elem===',elem.data)
//         })
//         })
//     })
// }

// function register(email,password){
//     return new promise((resolve, reject) => {
//         app.auth().createUserWithEmailAndPassword(email,password).then(user=>{
//             app.database().collection('users').add({email,createdAt:Date.now()}).then(()=>{
//                 resolve({message:'registerd succesful'})
//             }).catch(e=>{
//                 reject({message:e.message})
//             })
//         }).catch(e=>{
//             console.log(e)
//             reject({message:e.message})
//     })

//     })

// }

// var db = firebase.database();



export {app};