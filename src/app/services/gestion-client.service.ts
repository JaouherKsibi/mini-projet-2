import { stringify } from '@angular/compiler/src/util';
import { Injectable ,} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Client } from '../Model/Client';
@Injectable({
  providedIn: 'root'
})
export class GestionClientService {
  public clientList:any={firstName:"",lastName:"",email:"",phoneNumber:"",password:"",identityCardNumber:""};
  test:boolean=false;
  constructor(private route:Router,private firestore:AngularFirestore,private storage:AngularFireStorage,public alertController: AlertController , private fire:AngularFireAuth) { }
  /*signUp(){
    this.verif();
    if(this.test==false){
      this.firestore.collection("Clients").add({firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password,phoneNumber:this.phoneNumber,identityCardNumber:this.identityCardNumber})
    this.presentAlertOk();
     }
  }*/
  showAlertNotOk(){
    if(this.test==true){
      this.presentAlert();
    }
   }/*
  verif(){
    //var i=0;
   this.firestore.collection("Clients").snapshotChanges()
   .subscribe(elements => {

       elements.forEach(e => {
         this.clientList = e.payload.doc.data();
         if ({firstName:this.firstName ,lastName:this.lastName ,email : this.email , password : this.password , phoneNumber:this.phoneNumber , identityCardNumber:this.identityCardNumber}) {
           this.test = true;
           //console.log("yezzi bla la3b w zid compte jdid");
           this.route.navigateByUrl("/sign-in-client");
           return;
           //this.presentAlert();
         }
     })
   })
 this.lien();   
 }*/
 lien(){
  if (this.test == true) {
    this.route.navigateByUrl("/sign-in-client");
  } else {
    //this.route.navigateByUrl("/sign-up-client");
    console.log("errrrrrrrrrreeeer !!!!!! ")
  }
}
async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Error',
    subHeader: "Other Errors",
    message: 'Please enter other informations   .',
    buttons: [{
      text: 'ok',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => {
        this.route.navigateByUrl("/home");
      }
    }]
  });

  await alert.present();

}
async presentAlertOk() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Success',
    message: "Congratulations!you've just joined us ! .",
    buttons: [{
      text: 'ok',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => {
        this.route.navigateByUrl("/sign-in-client");
      }
    }]
  });

  await alert.present();

}
ajouter(c:Client,file_id){
  try {
    this.fire.auth.createUserWithEmailAndPassword(stringify(c.getEmail()) ,stringify(c.getPassword())).then ( data=> {
    data.user.sendEmailVerification();
        const files=file_id.nativeElement.files[0];
        const filePath='/Clients/'+`${Date.now()}_${files.name}`;
        this.storage.upload(filePath,files);
        this.presentAlertOk();
    return this.firestore.collection("Clients").doc(data.user.uid).set({firstName:c.getFirstName() ,lastName:c.getLastName() ,email : c.getEmail() , password : c.getPassword() , phoneNumber:c.getPhoneNumber() , identityCardNumber:c.getIdentityCardNumber() , imageUrl:filePath}) })       .catch( err=> { this.presentAlert()}) 
  }
  catch (error) {
    this.presentAlertError();
  }
  
}
async presentAlertError() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Error',
    message: "An Error has occured ! .",
    buttons: [{
      text: 'ok',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => {
        this.route.navigateByUrl("/sign-up-client");
      }
    }]
  });

  await alert.present();

}
}