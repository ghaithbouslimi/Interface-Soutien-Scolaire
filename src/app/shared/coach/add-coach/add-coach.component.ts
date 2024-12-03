import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.component.html',
  styleUrls: ['./add-coach.component.scss']
})
export class AddCoachComponent implements OnInit {

  public coachSpeciality: {value:string, viewValue:string}[] = [
    { value: 'Web Developement', viewValue: 'Web Developement' },
    { value: 'UX Design', viewValue: 'UX Design' },
    { value: 'Dev-Ops', viewValue: 'Dev-Ops' },
    { value: 'Data Science', viewValue: 'Data Science' },

  ];

  coachForm = this.fb.group({
    fullName: [null, Validators.required],
    email: [null, Validators.required],
    speciality: [null, Validators.required],
    phone: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    country: [null, Validators.required],
    observations: [null]
   
  });
  stepperOrientation: Observable<StepperOrientation>;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private courseService: CoachService,
              private snackBar: MatSnackBar,breakpointObserver: BreakpointObserver) {

                this.stepperOrientation = breakpointObserver
                .observe('(min-width: 800px)')
                .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }


  ngOnInit(): void {
    
  }



 

  get f(){
    return this.coachForm.controls;
  }
  
  


  onSubmit(): void {
      this.courseService.addCoach(this.coachForm.value).subscribe({
        next:(data)=>{
          this.router.navigate(['/admin/coaches']);
          this.snackBar.open("Coach inserted successfully", 'Close')
        },
        error:(error)=>{
          this.snackBar.open("Operation Failed", 'Close');
          console.error(error)
        },
        complete:()=>{

        }
      })
  }

}