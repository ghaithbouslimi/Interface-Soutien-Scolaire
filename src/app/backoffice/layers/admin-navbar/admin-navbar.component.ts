import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/user/authentication.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  public currentUser:any
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(value=>{
      this.currentUser=value
    });
  }
}
