import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('search emit value', form.value.search);
    this.searchEvent.emit(form.value.search);
  }
}
