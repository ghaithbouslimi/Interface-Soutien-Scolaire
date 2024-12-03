import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { IFormation } from '../formation.model';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.scss']
})
export class ListFormationComponent implements OnInit {
   formationList:IFormation[]=[]
  constructor(private formationService:FormationService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.formationService.getAllFormations().subscribe({
      next: (data:any)=>{
        this.formationList=data['rows'];
        console.log(this.formationList)
      },
      error: (error:any)=>{
              this.snackBar.open('Error Occured','x')

      }
    })
  }

  getCover(url){
    return url ? `${environment.API_URL}/${url}` : './assets/session.jpg'  
  }

}
