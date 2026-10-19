import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  CollectionReference
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);
  private employeesRef: CollectionReference = collection(this.firestore, 'employees');

  get $(): Observable<Employee[]> {
    return (collectionData(this.employeesRef) as Observable<any[]>).pipe(
      map(docs => docs.map(d => ({
        ...d,
        dateOfBirth: d.dateOfBirth?.toDate ? d.dateOfBirth.toDate() : d.dateOfBirth
      }) as Employee))
    );
  }

  addEmployee(employee: Employee) {
  }
}
