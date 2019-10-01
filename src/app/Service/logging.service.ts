export class LoggingService {

    statusChange(status: string){
        console.log('Server status is changed, new status: ' + status);
    }

}