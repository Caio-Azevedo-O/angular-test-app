import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  name:string = "";
  email:string = "";
  message:string = "";

  focusNext(next: HTMLElement | HTMLTextAreaElement){
    next.focus();
  }

  submit(): void {
    console.log('Form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message
    });
  }
}
