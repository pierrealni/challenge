import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { ApiService } from '../../shared/services/api.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule
      ],
      declarations: [ HomePage ],
      providers: [
        ApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.in = 10;
    component.conversionData = { USD : 1.102718 };
    component.toCurrency = 'USD';
  });

  it('should create the Home Page', () => {
    expect(component).toBeTruthy();
  });

  it('should convert euro to dollar', () => {
    component.onCalculate();
    expect(component.out).toBeTruthy();
  });

});
