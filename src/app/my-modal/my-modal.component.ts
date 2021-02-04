import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import * as introJs from 'intro.js/intro';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {

  modalRef: BsModalRef;
  introJS = introJs();
  currentStepNumber = 0;
  steps = [
    {
      element: '#mymodal',
      title: 'Tạo dự án',
      intro: 'Vui lòng nhập các thông tin dự án!',
      position: 'bottom'
    }];

  constructor(private modalService: BsModalService) {
    this.introJS.setOptions({
      steps: this.steps,
      showProgress: false,
      showBullets: false,
      showButtons: false,
      exitOnOverlayClick: false,
      showStepNumbers: true,
      overlayOpacity: 0
    });
  }

  openModal(template: TemplateRef<any>): void {
    // this.introJS = introJs();
    this.modalRef = this.modalService.show(template);
    this.introJS.start();

  }

  ngOnInit(): void {
    // this.introJS.start();
  }

  next(): void {
    this.currentStepNumber = this.introJS.currentStep();
    console.log(this.currentStepNumber);
    if (this.currentStepNumber === this.steps.length || this.currentStepNumber === undefined) {
      this.introJS.exit();
      this.currentStepNumber = 0;
    } else {
      this.introJS.goToStepNumber(this.currentStepNumber + 1).start();
    }
  }
}
