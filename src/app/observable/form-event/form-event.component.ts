import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit {

  constructor(private _designUtility: DesignUtilityService) { }
  @ViewChild("addBtn")
  addBtn!: ElementRef;

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, "click").subscribe(res => {
      let countValue = "video " + count++;
      // console.log(countValue);

      this._designUtility.print(countValue, "elContainer")
      this._designUtility.print(countValue, "elContainer2")
      // this.print(countValue, "elContainer");
      // this.print(countValue, "elContainer2");
    })
  }

 
}
