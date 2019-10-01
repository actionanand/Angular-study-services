import { Component} from '@angular/core';
import { AccountService } from '../Service/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
 
  constructor(private accService: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.addAccount(accountName,accountStatus)
  }
}
