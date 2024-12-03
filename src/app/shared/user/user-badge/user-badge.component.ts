import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit {
   @Input() currentUser:any;

  constructor(private authService:AuthenticationService, private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.route.navigate(['/home'])
  }

}
