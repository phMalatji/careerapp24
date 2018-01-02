import { Directive, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective  implements OnInit{
private el: HTMLElement;
closeResult: string;
@ViewChild('content') content:ElementRef;
@Output() modalOpened = new EventEmitter();

    constructor(elRef:ElementRef,private modalService: NgbModal){
            this.el = elRef.nativeElement;

    }
    ngOnInit(){

        this.el.addEventListener('click', e =>{
          // console.log("oi")

          this.modalOpened.emit({});
        })
      
    }

    open(content) {
        
         this.modalService.open(content).result.then((result) => {
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