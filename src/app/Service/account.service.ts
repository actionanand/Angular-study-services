import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()

export class AccountService{

    constructor(private logService: LoggingService){}

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    addAccount(accName: string, accStatus: string){
        this.accounts.push({name: accName, status: accStatus});
        this.logService.statusChange(accStatus);
    }

    changeStatus(accID: number, accStatus: string){
        this.accounts[accID].status = accStatus;
        this.logService.statusChange(accStatus);
    }

}