import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {  InsuranceProductHomePage } from 'src/app/model/product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, AfterViewInit {
  @ViewChild('modal', { read: TemplateRef }) modal!: TemplateRef<any>;

  @Input() selectedProducts: InsuranceProductHomePage[] = [];
  @Input() currentProduct: InsuranceProductHomePage = {
    id: 0,
    name: "",
    price: 0,
    pic: "",
    miniPic: "",
    minAge: 0,
    maxAge: 0,
    bullets: [],
    typeInsure:[]
  };

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  open() {
    this.modalService.open(this.modal, { centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  closeResult = '';

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
