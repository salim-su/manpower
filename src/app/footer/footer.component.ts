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
    // this.service.getBillTypes();
    // this.service.getaa();
    //
    //
    // this.service.getbb().subscribe(res => {
    //   console.log(res.json().data);
    // });

    this.service.getItems().subscribe(res => {
      console.log(res);
    });
  }

}
