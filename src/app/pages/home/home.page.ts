import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';


import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

  @ViewChild('in') in: ElementRef;
  @ViewChild('out') out: ElementRef;

  public conversionData: any = {};
  public loading: boolean = false;
  public conversionPoll: any = null;
  public intervalPoll: number = 1000*60*10;
  public toCurrency: string = 'USD';

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getConversionData().subscribe((data: any) => {
      this.conversionData = data.rates
    });
  }

  onCalculate(event) {

    if(!this.in.nativeElement.value){
      this.out.nativeElement.value = '';
      return;
    }
    this.loading = true;

    this.conversionPoll = timer(0, this.intervalPoll).pipe(
      switchMap(() => this.api.getConversionData()))
      .subscribe(
        (data: any) => {
          if(!this.in.nativeElement.value){
            this.out.nativeElement.value = '';
            return;
          }
          this.loading = true;
          const inputValue: number = Number.parseFloat(this.in.nativeElement.value);
          this.conversionData = data.rates;
          const result: number = inputValue * Number.parseFloat(this.conversionData[this.toCurrency]);
          const outputValue = result.toFixed(4);
          this.out.nativeElement.value = outputValue;
          this.loading = false;

          console.log(this.conversionData);
        },
        (error: any) => {
          console.log(error)
        }
      );
  }

  ngOnDestroy(): void {
    if (this.conversionPoll) {
      this.conversionPoll.unsubscribe();
    }
  }
}
