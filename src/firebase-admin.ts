import admin from 'firebase-admin'

const FIREBASE_CONFIG:string = process.env.FIREBASE_CONFIG || '{}'
const config:any = JSON.parse(FIREBASE_CONFIG)
config.credential = admin.credential.applicationDefault()
admin.initializeApp(config)

export default admin
