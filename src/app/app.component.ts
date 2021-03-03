import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
constructor(){
  const firebaseConfig = {
    apiKey: "AIzaSyB5h5sYvIHuqJ-X6PeU5tMRjVtY9IAFVtQ",
    authDomain: "blog-38c6a.firebaseapp.com",
    projectId: "blog-38c6a",
    storageBucket: "blog-38c6a.appspot.com",
    messagingSenderId: "987971060901",
    appId: "1:987971060901:web:84d8f48015e27fc065794c",
    measurementId: "G-58TW2N7HXR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

}
