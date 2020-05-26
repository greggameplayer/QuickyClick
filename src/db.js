import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ apiKey: process.env.VUE_APP_FirebaseAPIKey, projectId: 'quickyclick-87728', authDomain: 'quickyclick-87728.firebaseapp.com' })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
