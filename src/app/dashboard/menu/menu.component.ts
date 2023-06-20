import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public router:Router){
  }
  userbutton(){
    this.router.navigate(["dusers"])
  }
  taskbutton(){
    this.router.navigate(["dtasks"])
  }
  summarybutton(){
    this.router.navigate(["dsummary"])
  }
}
