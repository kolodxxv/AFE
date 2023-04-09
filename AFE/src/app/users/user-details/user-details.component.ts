import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../shared/users.service';
import { map, tap, filter } from 'rxjs/operators';
import { UsersItem } from '../shared/interfaces/interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UsersService]
})
export class UserDetailsComponent implements OnInit {
  public userId!: number;
  public userData: any;
  public user: UsersItem | undefined;
  constructor(
    private route: ActivatedRoute,
    private userSrvc: UsersService
  ) {
    this.route.params.subscribe(item => {
      this.userId = +item['id'];
    });
  }

  ngOnInit(): void {
    this.userSrvc.getListOfUsers()
    .pipe(
      map(item => {
        return item.filter(val => val.id === this.userId)
      }),
      tap(val => {
        val.forEach(item => {
          this.user = item
        })
      })
    )
    .subscribe()

  }
}
