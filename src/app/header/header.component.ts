import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  facebookURL = 'https://www.facebook.com/skyvaultmt';
  youtubeURL = 'https://www.youtube.com/channel/UCpsM5h2d_Wmep-PYF8Fzlgw';
  constructor() {
  }

  ngOnInit() {
  }

}
