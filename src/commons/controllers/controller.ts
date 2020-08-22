import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert(require('./../../../secret-client.json')),
  databaseURL: "https://commerce-e6351.firebaseio.com"
});

export class Controller {
    protected static collectionName: string = 'default'
    private static db: admin.firestore.Firestore  = admin.firestore();
    public static collection() {
        return this.db.collection(this.collectionName);
    }
}