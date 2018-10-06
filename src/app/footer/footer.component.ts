import {Component, OnInit} from '@angular/core';
import {MainService} from '../service/main.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private service: MainService) {
  }

  ngOnInit() {

  }

}
