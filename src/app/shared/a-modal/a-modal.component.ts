import { Component, OnInit, Input, ViewChild, ElementRef , AfterViewInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-a-modal',
  templateUrl: './a-modal.component.html',
  styleUrls: ['./a-modal.component.scss']
})
export class AModalComponent implements OnInit, AfterViewInit {
@Input() title:string;
@ViewChild('modalDiv') modalDiv:ElementRef;
closeResult: string;

  constructor(private modalService: NgbModal) { }
  
  ngOnInit() {

  }

  ngAfterViewInit() {
   
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
  }
  testy(){
    console.log('wowa')
  }

  openModal(){
      this.open(this.modalDiv);
  }

  open(content) {
    this.modalService.open(content,{size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
