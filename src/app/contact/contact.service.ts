import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
  name?: string;
  email?: string;
  message?: string;
}

@Injectable()
export class AppService {

  private emailUrl = '/assets/email.php';
  private switch = 0; // Display message state switch 0 - nothing is showing , 1 - message is now displayed

  constructor(private http: Http) {

  }

  messageboxFlash(msgstring) {
    if (this.switch === 0) {
      this.switch = 1;
      const statbx = document.getElementById('statusbox');
      statbx.style.display = 'block';
      statbx.style.opacity = '1';
      statbx.innerHTML = msgstring;
      setTimeout(x => {statbx.innerHTML = ''; statbx.style.display = 'none'; this.switch = 0; }, 4000);
    }
  }

  clearForm() {
    (<HTMLInputElement>document.getElementById('nametextbox')).value = '';
    (<HTMLInputElement>document.getElementById('emailtextbox')).value = '';
    (<HTMLInputElement>document.getElementById('messagetextbox')).value = '';
  }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    const nameval =  (<HTMLInputElement>document.getElementById('nametextbox')).value ;
    const emailval =  (<HTMLInputElement>document.getElementById('emailtextbox')).value ;
    const messageval =  (<HTMLInputElement>document.getElementById('messagetextbox')).value ;

    if (nameval !== '' && emailval !== '' && messageval !== '') {
      this.clearForm();
      return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        this.messageboxFlash('Message has been successfully sent');
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        this.messageboxFlash('There has been an error sending a message');
        return Observable.throw(error);
      });

    } else {
      this.messageboxFlash('Fill all text fields');
      return this.http.post('', null); // ???
    }


  }
}
