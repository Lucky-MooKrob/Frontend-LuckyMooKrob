import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InsuranceProduct } from 'src/app/model/product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, AfterViewInit {
  @ViewChild('modal', { read: TemplateRef }) modal!: TemplateRef<any>;

  @Input() selectedProducts: InsuranceProduct[] = [];
  @Input() currentProduct: InsuranceProduct = {
    insuranceMiniDetailsID: 0,
    insuranceMiniDetailsName: '',
    insuranceMiniDetailsPic: '',
    insuranceMiniDetailsPrice: 0,
    insuranceMiniDetailsFBulletin: '',
    insuranceMiniDetailsSBulletin: '',
    insuranceMiniDetailsTBulletin: '',
    insuranceMiniDetailsStartAge: 0,
    insuranceMiniDetailsEndAge: 0,
    insuranceMiniDetailsDisease: '',
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
