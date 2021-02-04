import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MyComponentComponent} from './my-component/my-component.component';
import {MyModalComponent} from './my-modal/my-modal.component';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        MyComponentComponent,
        MyModalComponent
    ],
    imports: [
        BrowserModule,
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
