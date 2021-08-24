import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distinction-page',
  templateUrl: './distinction-page.page.html',
  styleUrls: ['./distinction-page.page.scss'],
})
export class DistinctionPagePage implements OnInit {

  constructor(private router:Router) { }
  onClick1(){
    this.router.navigateByUrl('login-service-provider');
  }
  onClick2(){
    this.router.navigateByUrl('login-client');
  }
  ngOnInit() {
  }

}
