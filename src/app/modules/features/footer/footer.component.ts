import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild('sectionNeedToScroll') sectionNeedToScroll: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewChecked() {
  //   window.scrollTo(0, 0);
  //   }

    // onEdit(){
    //   document.body.scrollTop = document.documentElement.scrollTop = 0;
    // }

    public gotoSection() {
      //this will provide smooth animation for the scroll
      this.sectionNeedToScroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

}
