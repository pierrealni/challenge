import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {

  public stack = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getProjectStack().subscribe((data: any) => {
      this.stack = data.stack
    });
  }

}
