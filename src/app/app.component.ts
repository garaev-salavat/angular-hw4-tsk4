import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService],
})
export class AppComponent {
  title = 'angular-hw4-tsk4';

  phoneBooks: Observable<Object>;
  constructor(private httpService: HttpService) {}
  ngOnInit(): void {
    this.phoneBooks = this.httpService.getPhoneBooks();
  }
}
