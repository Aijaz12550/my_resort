import * as firebase from 'firebase'
import { promised } from 'q';
// import { promised } from 'q';
// import { resolve } from 'path';

// import * as firebase from 'firebase'

const config ={

   
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
