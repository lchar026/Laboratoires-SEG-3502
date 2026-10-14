import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactData } from '../contact-data';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  private builder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);
  private data: ContactData = inject(ContactData);

  contactForm = this.builder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    // Ajout du Validator.pattern requis pour le format du numéro de téléphone
    phone: ['', [
      Validators.required, 
      Validators.pattern(/^[1-9][0-9]{2}[1-9][0-9]{6}$/)
    ]],
    email: ['', Validators.email],
  });

  get firstName() { return this.contactForm.controls.firstName; }
  get lastName() { return this.contactForm.controls.lastName; }
  get phone() { return this.contactForm.controls.phone; }
  get email() { return this.contactForm.controls.email; }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.data.setContact(this.contactForm.getRawValue());
    this.router.navigate(['/resultat']);
  }
}
