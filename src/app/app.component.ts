import {Component, OnInit, TemplateRef} from '@angular/core';

import * as introJs from 'intro.js/intro.js';
import {MyModalComponent} from './my-modal/my-modal.component';
import {BsModalService} from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'NG7IntroJS';
    introJS = introJs();
    currentStepNumber = 0;
    modal: MyModalComponent;
    steps = [
        {
            element: '#step1',
            title: 'Tạo dự án',
            intro: 'Nhấn vào nút để tạo dự án của bạn',
            position: 'right'
        },
        {
            element: '#step2',
            intro: 'Ok, wasn\'t that fun?',
            position: 'right'
        },
        {
            element: '#step3',
            intro: 'let\'s keep going',
            position: 'top'
        },
        {
            element: '#step4',
            intro: 'More features, more fun.',
            position: 'right'
        }
    ];

    constructor(private modalService: BsModalService) {
        this.modal = new MyModalComponent(this.modalService);
        this.introJS.setOptions({
            steps: this.steps,
            showProgress: false,
            showBullets: false,
            showButtons: false,
            exitOnOverlayClick: true,
            showStepNumbers: true
        });
    }

    ngOnInit(): void {
        this.introJS.start();
        var x = document.querySelector('.introjs-tooltip-title');
        x.setAttribute('data-before', this.currentStepNumber + 1 + '');
    }

    showModal(template: TemplateRef<any>): void {
        // this.introJS.exit();
        this.modal.openModal(template);
    }

    next(): void {
        this.currentStepNumber = this.introJS.currentStep();
        if (this.currentStepNumber === this.steps.length || this.currentStepNumber === undefined) {
            this.introJS.exit();
            this.currentStepNumber = 0;
        } else {
            this.currentStepNumber++;
            this.introJS.goToStepNumber(this.currentStepNumber).start();
        }
        var x = document.querySelector('.introjs-tooltip-title');
        x.setAttribute('data-before', this.currentStepNumber + 1 + '');
    }
}
