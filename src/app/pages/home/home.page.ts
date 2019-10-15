import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Conversion } from '../../shared/models/conv';

import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

  public in: any;
  public out: any;

  public conversionData: any = null;
  public loading: boolean = null;
  public conversionPoll: any = null;
  public intervalPoll: number = 1000 * 60 * 10;
  public toCurrency: string = 'USD';

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.conversionPoll = timer(0, this.intervalPoll).pipe(
      switchMap(() => this.api.getConversionData()))
      .subscribe(
        (data: Conversion) => {
          this.conversionData = data.rates;
          if (this.loading !== null) {
            this.onCalculate();
          }
          console.log(this.conversionData);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  onCalculate(): any {

    if (!this.in || !this.conversionData) {
      this.out = '';
      return;
    }

    this.loading = true;

    const inputValue: number = Number.parseFloat(this.in);
    const conversion: number = Number.parseFloat(this.conversionData[this.toCurrency]);

    const result: number = inputValue * conversion;
    const outputValue: number = Number.parseFloat(result.toFixed(4));

    this.out = outputValue;

    this.loading = false;

  }

  ngOnDestroy(): void {
    if (this.conversionPoll) {
      this.conversionPoll.unsubscribe();
    }
  }
}

