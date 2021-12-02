import firebase from "firebase/app"
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

const config = {

    apiKey: process.env.FIREBASE_API_KEY,

    authDomain: process.env.FIREBASE_AUTH_DOMAIN,

    databaseURL: process.env.FIREBASE_DATABASE_URL,

    projectId: process.env.FIREBASE_PROJECT_ID,

    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,

    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,

    appId: process.env.FIREBASE_APP_ID

};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};


// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });


// database.ref('expenses').push({
//     description: 'Coffee',
//     note: '',
//     amount: 5,
//     createdAt: "21.10.2021",
// })






// database.ref('notes/-Mph5HFuwDDDMaqtsuBB').remove();

// database.ref('notes').push({
//     title: 'Course',
//     body: 'New course yua'
// });

// const firebaseNotes = {
//     notes: {
//         12: {
//             title: 'First note',
//             body:'This is my note',
//         },
//         1: {
//             title: 'Another note',
//             body:'This is my 2nd',}
//     }
// }


// const note = [{
//     id:12,
//     title: 'First note',
//     body:'This is my note',
// }, {
//     id:1,
//     title: 'Another note',
//     body:'This is my 2nd',
// }];


// database.ref('notes').set(note);
// database.ref('notes/')


// const dataSub = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//         console.log('Error with data fetching', e);
//     })



// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);
  

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

//   database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   })



//   database.ref().set({
//       name: 'Mario Arro',
//       age: 21,
//       stressLevel: 7,
//       job: {
//           title: 'Software developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Riga',
//           country: 'Latvia'
//       },

//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//     console.log('This failed!', e);
//   });


//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': 'Seattle'
//   })


// database.ref()
// .remove()
// .then(() => {
//     console.log('Data was removed');
// })
// .catch((e) => {
//     console.log('Data wasnt removed',e);
// })