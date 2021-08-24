import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Client } from '../model/Client';
import { GestionClientService } from '../services/gestion-client.service';

@Component({
  selector: 'app-sign-up-client',
  templateUrl: './sign-up-client.page.html',
  styleUrls: ['./sign-up-client.page.scss'],
})
export class SignUpClientPage implements OnInit {
  @ViewChild("id_f") file_id:any;
  firstName:string;
  lastName:string;
  email:string;
  phoneNumber:string;
  password:string;
  passwordReenter:string;
  identityCardNumber:string;
  constructor(private serviceGestionClient:GestionClientService,public alertController: AlertController , private route:Router) { }
  ajouter(){
    /*if(this.verifAllFieldsNotEmpty(this.firstName,this.lastName,this.email,this.phoneNumber,this.password,this.passwordReenter,this.identityCardNumber, this.file_id)==false){
      this.presentAlertEmptyFieldError();
      return ;
    }
    else{
      if(this.verifPasswords(this.password,this.passwordReenter)==false){
        this.presentAlertPasswordsDontMatch();
      }
      else{
        let client =new Client(this.firstName,this.lastName,this.phoneNumber,this.email,this.password,this.identityCardNumber,"");
        this.serviceGestionClient.ajouter(client,this.file_id);
        //notre travail ici 

      }
    }*/
  }
  verifPasswords(password1,password2){
    if (password1==password2) {
      return true;
    } else {
      return false;
    }
  }
  verifAllFieldsNotEmpty(firstName:string,
    lastName:string,
    email:string,
    phoneNumber:string,
    password:string,
    passwordReenter:string,
    identityCardNumber:string,file_id:any){
      if(firstName==null||lastName==null||email==null||phoneNumber==null||password==null||passwordReenter==null||identityCardNumber==null||file_id==null){
        return false;
      }
      else{
        return true;
      }
    }
  gotoLogin(){
    this.route.navigateByUrl("/sign-in-client")
  }


  async presentAlertEmptyFieldError() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Umpty Field',
      message: 'Please fill all fields .',
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
  async presentAlertPasswordsDontMatch() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: "passwords don't match ",
      message: 'Please verify the passwords  .',
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
  ngOnInit() {
  }

}
