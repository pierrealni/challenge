import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';

@Injectable()
export class ApiService {

  private prefix: string = (isDevMode() ? '' : '/challenge')
  public footerSectionsUrl: string = this.prefix + '/assets/json/footerSections.json';
  public projectStacksUrl: string = this.prefix + '/assets/json/projectStack.json';
  public conversionMockUrl: string = this.prefix + '/assets/json/conversionMock.json';

  /* Conversion endpoint will be mocked when serving project in prod through github pages (SSL prod mode does not
   allow requests to not secure urls, dev mode does) */
  public conversionEndpoint: string = isDevMode() ? 'http://data.fixer.io/api/latest?access_key=e6375b0ac6f7bb52859ed163c5d609bf' : this.conversionMockUrl;

  constructor(
    public http: HttpClient
  ) {
  }

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
