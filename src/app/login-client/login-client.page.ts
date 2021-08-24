import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { Client } from '../Model/Client';
import { switchMap } from 'rxjs/operators'
//import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.page.html',
  styleUrls: ['./login-client.page.scss'],
})
export class LoginClientPage implements OnInit {

  constructor(public loadingController:LoadingController,public toastController: ToastController,private fire:AngularFireAuth,private router:Router,public alertController: AlertController,public firestore:AngularFirestore) { }
  onClick1(){
    this.router.navigateByUrl("/sign-up-client");
  }
  ngOnInit() {
    
  }

}
