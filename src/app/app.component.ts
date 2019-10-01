import { Component, OnInit } from '@angular/core';
import { AccountService } from './Service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
  
})

export class AppComponent implements OnInit {

  constructor (private accService: AccountService) {}

  accounts = [];

  ngOnInit(){
    this.accounts = this.accService.accounts;

  }
}
