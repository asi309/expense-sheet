import * as firebase from 'firebase';

// Firebase config object
const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498756
// });

// database.ref().on('value', (snapshot) => {
//     console.log('Data Updated!', snapshot.val());
// }, (e) => {
//     console.log("Update error occured", e);
// });

//set with null is same as remove!!!

// database.ref().set({
//     name: 'Asidipta Chaudhuri',
//     age: 22,
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: "Asansol",
//         country: "India"
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('ERROR', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     'location/country': 'US'
// }).then(() => {
//     console.log('Updated successfully');
// }).catch((e) => {
//     console.log('Update Failed', e);
// });
// database.ref('age').set(23);
// database.ref('location/city').set('Asansol');
// database.ref('attributes').set({
//     height: 180,
//     weight: 70
// });