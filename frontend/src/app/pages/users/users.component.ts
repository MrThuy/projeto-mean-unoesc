import { UserService } from './../../users/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public pageUsers: Observable<any>;
  public message: string;
  constructor(
    private service: UserService,
    public router: Router
  ) { }

  ngOnInit() {
    this.pageUsers = this.service.list();
    this.pageUsers.subscribe(response => {
      console.table(response);
    })
  }
  update(user) {
    this.router.navigate(['user-update', user._id]);
  }
  remove(user) {
    this.service.remove(user._id).subscribe((response: any) => {
      this.message = response.message;
      this.pageUsers = this.service.list();
    })
  }
  search(event) {
    let term = (event.type == 'search') ? event.target.value : event;
    this.pageUsers = (term) ? this.service.search('nome', term) : this.service.list();
  }
}
