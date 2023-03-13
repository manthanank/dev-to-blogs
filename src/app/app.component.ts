import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  details: any;
  
  name = new FormControl('', Validators.required);

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  getBlogdetails() {
    this.dataService
      .getBlogDetails(this.name.value)
      .pipe()
      .subscribe((res) => {
        console.log(res);
        this.details = res;
      });
  }
}
