import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{
    isShowHistoryDrop: boolean = false;
    isUserDropDown: boolean = false;
    faUserCircle = faUserCircle;
}