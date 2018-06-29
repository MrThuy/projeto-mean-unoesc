import { UserService } from './../../users/user.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  private id: string;
  public user$: Observable<any>;
  public message: string;
  constructor(
    private service: UserService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.getUser(params.id);
    })
  }
  getUser(id) {
    this.id = id;
    this.user$ = this.service.get(id);
  }
  ngOnInit() {
  }
  save(user) {
    this.service.update(this.id, user).subscribe((response: any) => {
      this.message = response.message;
    });
  }

}
