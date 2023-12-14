import { style } from '@angular/animations';
import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent {
  isFirstDivVisible: boolean = true;

  toggleDivVisibility() {
    this.isFirstDivVisible = !this.isFirstDivVisible;
  }
}
