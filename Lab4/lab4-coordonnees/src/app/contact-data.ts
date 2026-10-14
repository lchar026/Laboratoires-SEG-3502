import { Injectable } from '@angular/core';

export interface ContactInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactData {
  private current: ContactInfo | null = null;

  setContact(value: ContactInfo): void {
    this.current = { ...value };
  }

  getContact(): ContactInfo | null {
    return this.current;
  }
}
