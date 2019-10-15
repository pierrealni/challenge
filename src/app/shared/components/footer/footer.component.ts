import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Section } from '../../../shared/models/section';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public sections: Array<Section> = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getFooterSections().subscribe((data: { sections: Array<Section> }) => {
      this.sections = data.sections;
    });
  }

}
