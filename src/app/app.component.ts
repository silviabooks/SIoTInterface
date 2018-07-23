import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'SIoT Application';
  private endpoint = 'http://localhost:8080/Sim/SIoT/Server/';
  public data: any = null;
  public resultTitle = 'The results will be shown here';
  public transactionData: any = null;

  constructor(private _http: Http) {
  }

  public getClients(_id: string) {
    return this._http.get(this.endpoint + _id + '/Clients') // http://localhost:8080/Sim/SIoT/Server/0/Clients
                .toPromise().then((res) => {
                  this.data = res.json();
                  this.resultTitle = 'List of clients in SVER 0: ';
                  console.log(this.data);
                });
  }


    // {id}/SVER/{uid}/Transaction/{amount}/{address}
  public makeTransaction(_id: number, uid: number,
    amount: string, address: string) {
    return this._http.get(this.endpoint + _id + '/SVER/' + uid
                        + '/Transaction/' + amount + '/' + address)
                .toPromise().then((res) => {
                  this.transactionData = res.json().SVE;
                  console.log(res.json().SVE);
                });


  }

}



