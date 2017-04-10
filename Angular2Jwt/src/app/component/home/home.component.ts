import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { SampleService } from '../../services/sample.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private http: Http,
        private sampleService: SampleService) { }

  ngOnInit() {
  }

  sample() {

      this.sampleService.getSampleValue().subscribe(
          value => {
              var a = value;
          },
          err => {
              // Log errors if any
              console.log(err);
          });
  }
}
