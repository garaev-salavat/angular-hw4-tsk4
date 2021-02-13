import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  @Input() phoneBook;

  constructor() { }

  ngOnInit(): void {
  }

}
