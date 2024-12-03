import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-user-badge',
  templateUrl: './admin-user-badge.component.html',
  styleUrls: ['./admin-user-badge.component.scss']
})
export class AdminUserBadgeComponent implements OnInit {

  @Input() currentUser:any;

  constructor(private authService:AuthenticationService, private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.route.navigate(['/home'])
  }

}
