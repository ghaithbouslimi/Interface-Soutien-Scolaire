import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/user/authentication.service';

@Component({
  selector: 'app-guest-navbar',
  templateUrl: './guest-navbar.component.html',
  styleUrls: ['./guest-navbar.component.scss']
})
export class GuestNavbarComponent implements OnInit {
  public currentUser:any
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(value=>{
      this.currentUser=value
    });
  }

}
