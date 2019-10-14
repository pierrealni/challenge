import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";

@Injectable()
export class ApiService {

  public footerSectionsUrl: string = '/assets/json/footerSections.json';
  public projectStacksUrl: string = '/assets/json/projectStack.json';
  public conversionEndpoint: string = 'http://data.fixer.io/api/latest?access_key=e6375b0ac6f7bb52859ed163c5d609bf';


  constructor(
    public http: HttpClient
  ) { }

  public getFooterSections() {
    return this.http.get(this.footerSectionsUrl);
  }

  public getProjectStack() {
    return this.http.get(this.projectStacksUrl);
  }

  public getConversionData() {
    return this.http.get(this.conversionEndpoint);
  }

}
