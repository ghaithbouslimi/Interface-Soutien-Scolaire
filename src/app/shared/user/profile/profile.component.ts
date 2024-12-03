import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser:IUser
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => this.currentUser=user)
  }

}
