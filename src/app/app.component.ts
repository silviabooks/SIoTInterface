import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// import { map } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIoT';
  private endpoint = 'http://localhost:8080/Sim/SIoT/Server/';
  data: any = {};
  resultTitle = 'The results will be shown here...';

  constructor(private _http: Http) {
  }

  // TODO: scrivere i metodi per prendere tutte le robe
  // TODO: tra cui quello per effettuare la transazione.. Da aggiungere anche nel backend

  // Example:

  public getAllLogs() {
    return this._http.get(this.endpoint + 'COMPLETA API')
                .pipe(map((res: Response) => res.json()))
                 .subscribe(data => {
                        this.data = data;
                        this.resultTitle = 'All logs:';
                        console.log(this.data);
                });
  }
}
