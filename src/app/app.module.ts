import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth'
//import { AuthGuard } from "./guards/auth.guard";
//import { AuthService } from "./services/auth.service";
//import { IonicStorageModule } from '@ionic/storage-angular';
//import { LocalStorageServiceService } from 'src/local-storage-service.service';
//import { Drivers } from '@ionic/storage';
//import { Service1Service } from './services/service1.service';

/*
import { GestionCategoriesService } from "./services/gestion-categories.service";
import { GestionClientService } from "./services/gestion-client.service";
import { GestionProductsService } from "./services/gestion-products.service";
import { GestionRentsService } from "./services/gestion-rents.service";
import { GestionServiceProviderService } from "./services/gestion-service-provider.service";
import { LoginServiceProviderService } from "./services/login-service-provider.service";
import { LoginService } from "./services/login.service";
import { LogoutClientService } from "./services/logout-client.service";
import { LogoutServiceProviderService } from "./services/logout-service-provider.service";
*/
const firebaseConfig = {
  apiKey: "AIzaSyBNFgOxP1UAU50gyMxRj9kIlufmthu2MyQ",
  authDomain: "mini2-a0d0c.firebaseapp.com",
  projectId: "mini2-a0d0c",
  storageBucket: "mini2-a0d0c.appspot.com",
  messagingSenderId: "568389783203",
  appId: "1:568389783203:web:5a7ea56c66378fe2a27916"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig) , AngularFireStorageModule , AngularFirestoreModule , AngularFireAuthModule ],
  providers: [/*GestionCategoriesService,GestionClientService,GestionProductsService,GestionRentsService,
    GestionServiceProviderService,LoginServiceProviderService,LoginService ,
    LogoutClientService, LogoutServiceProviderService ,*/ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
