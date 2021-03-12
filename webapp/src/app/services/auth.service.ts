import { Injectable } from '@angular/core'
// firebase
import * as firebaseui from 'firebaseui'
import firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'
import {
    AngularFirestore,
    AngularFirestoreDocument,
    AngularFirestoreCollection,
    DocumentReference,
} from '@angular/fire/firestore'
import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { Router } from '@angular/router'

// configuration for the ui
const config = {
    signInSuccessUrl: 'home',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: 'terms-of-service',
    privacyPolicyUrl: 'privacy-policy',
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    user$: Observable<any> = new Observable<any>()
    user: any
    ui: firebaseui.auth.AuthUI = new firebaseui.auth.AuthUI(firebase.auth()) // login firebase ui
    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
        this.getUser()
    }

    async getUser() {
        this.user$ = this.afAuth.authState.pipe(
            switchMap((user: any) => {
                // this.asyncOperation.next(false);
                // Logged in
                if (user) {
                    this.user = user
                    return of(this.user)
                } else {
                    // Logged out
                    return of(null)
                }
            })
        )
    }
    startUi() {
        this.ui.start('#firebaseui-auth-container', config)
    }
    private updateUserData(user: any) {
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
            `users/${user.uid}`
        )

        const data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        }

        return userRef.set(data, { merge: true })
    }

    async signOut() {
        await firebase.auth().signOut()
        this.router.navigate(['/'])
    }
}
