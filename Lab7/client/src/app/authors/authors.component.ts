import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Author } from '../books/model/book';
import { BooksService } from '../books/service/books.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf]
})
export class AuthorsComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  private booksService: BooksService = inject(BooksService);

  author: Author | null = null;
  notFound = false;

  searchForm = this.formBuilder.group({
    id: ['', Validators.required]
  });

  onSubmit(): void {
    const id = this.searchForm.value.id!;
    this.booksService.getAuthor(id).subscribe({
      next: (data: Author) => {
        this.author = data;
        this.notFound = false;
      },
      error: () => {
        this.author = null;
        this.notFound = true;
      }
    });
  }
}
