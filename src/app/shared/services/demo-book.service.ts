import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DemoBookService {

  private _books :  string[]  = ['Livre 1', 'Livre 2', 'Livre 3'];

  // Get All
  public getBooks() : string[] {
    return this._books;
  }

  // Ajouter un livre
  public addBook(newBook : string) : void{
    this._books.push(newBook);
  }

  // supprimer un livre
  public removeBook(index : number) : void {
    if (index >= 0 && index < this._books.length) {
      this._books.splice(index, 1);
    }
  }
}
