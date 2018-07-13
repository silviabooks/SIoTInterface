import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// import { map } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { getDefaultService } from 'selenium-webdriver/opera';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIoT Application';
  private endpoint = 'http://localhost:8080/Sim/SIoT/Server/';
  data: any = null;
  resultTitle = 'The results will be shown here...';

  constructor(private _http: Http) {
  }

  // Example:

  public getSVER() {
    const list: number[] = [];
    const regex = new RegExp('\\d+');

    return this._http.get(this.endpoint + '0/Clients') // http://localhost:8080/Sim/SIoT/Server/0/Clients
                .toPromise().then((res) => {
                  this.data = res.json();
                  this.resultTitle = 'List of clients in SVER 0: ';
                  console.log(this.data);
                });
  }

  public getSVE(_id: number) {
    return this._http.get(this.endpoint + '0/SVER/' + _id)
                .toPromise().then((res) => {
                  // TODO: sistemare sta cosa, far comparire i dati
                  // this.data = res.json();
                  console.log(res.json());
                });
  }

  public makeTransaction(_id: number, uid: number, amount: string, address: string) {
    return this._http.get(this.endpoint + '0/SVER/' + _id)
                .toPromise().then((res) => {
                  // TODO: COMPLETARE
                  // this.data = res.json();
                  console.log(res.json());
                });
  }

}



