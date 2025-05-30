import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     provideFirebaseApp(() => initializeApp({
       projectId: "tickets-project-a3c2e",
       appId: "1:314900855080:web:515df51f1c4c60733ef81d",
        storageBucket:"tickets-project-a3c2e.firebasestorage.app",
        apiKey: "AIzaSyA0e2uRwTJptrV7JdGVY6z1CQ-kuhtjwnE",
         authDomain: "tickets-project-a3c2e.firebaseapp.com",
         messagingSenderId: "314900855080" })),
          provideAuth(() => getAuth()),
           provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
