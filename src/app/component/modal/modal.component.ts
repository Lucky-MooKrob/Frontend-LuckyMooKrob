import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InsuranceProductHomePage } from 'src/app/model/product';
import { Route, Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

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
    typeInsure: []
  };

  modalReference: any;
  radioChecked: boolean = true;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private service: AppServiceService
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }

  open() {

    this.modalReference = this.modalService.open(this.modal, { centered: true });
    this.modalReference.result.then(
      (result: any) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason: any) => {
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

  checkValue() {
    const value = document.querySelectorAll('input[name="form-product"]');
    value.forEach((item: any, index: number) => {
      console.log(index);
      console.log(item)
      if (item.checked) {
        this.radioChecked = false
        if (item.value == this.service.statusCheck.statusColumns1) {
          this.service.statusCheck.statusColumns1 = this.currentProduct.id
          console.log("🚀 ~ file: modal.component.ts ~ line 81 ~ ModalComponent ~ value.forEach ~ this.service.statusCheck.statusColumns1", this.service.statusCheck.statusColumns1)
        }
        if (item.value == this.service.statusCheck.statusColumns2) {
          this.service.statusCheck.statusColumns2 = this.currentProduct.id
          console.log("🚀 ~ file: modal.component.ts ~ line 85 ~ ModalComponent ~ value.forEach ~ this.service.statusCheck.statusColumns2", this.service.statusCheck.statusColumns2)
        }
      }
    })
    this.reloadCurrentRoute()
    this.modalReference.close()

  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
    
  }

}



