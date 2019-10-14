import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public sections: any = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getFooterSections().subscribe((data: any) => {
      this.sections = data.sections
    });
  }

}
