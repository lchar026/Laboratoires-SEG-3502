import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactData } from '../contact-data';

@Component({
  selector: 'app-contact-result',
  imports: [RouterLink],
  templateUrl: './contact-result.html',
  styleUrl: './contact-result.css',
})
export class ContactResult {
  private data: ContactData = inject(ContactData);
  contact = this.data.getContact();
}
