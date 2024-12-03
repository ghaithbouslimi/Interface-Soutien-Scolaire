import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatStepperModule, StepperOrientation} from '@angular/material/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachService } from '../coach.service';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-update-coach',
  templateUrl: './update-coach.component.html',
  styleUrls: ['./update-coach.component.scss']
})
export class UpdateCoachComponent implements OnInit {

  currentCoachId: string = '';

  public ngSelect?:any;

  public specialities:any = [
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
    private coachService: CoachService,
    private snackBar: MatSnackBar,breakpointObserver: BreakpointObserver) {
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  

  ngOnInit(): void {
    this.route.data.subscribe({
      next: data => {
        let coach = data['coach'];
        this.currentCoachId = coach.id;
      
        this.coachForm.patchValue({
          fullName: coach.fullName,
          email: coach.email,
          phone: coach.phone,
          address: coach.address,
          city: coach.city,
          country: coach.country,
          speciality:coach.speciality,
          observations: coach.observations
        });

        this.ngSelect = coach.speciality;

      },
      error: error => console.log(error)
    })
  }



  get f() {
    return this.coachForm.controls;
  }

  onSubmit(): void {
    let coach = this.coachForm.value;
    this.coachService.updateCoach(this.currentCoachId, coach).subscribe({
      next: (data) => {
        this.router.navigate(['/admin/coaches']);
        this.snackBar.open("Coach Updated Successfully", 'x')
      },
      error: (error) => {
        this.snackBar.open("Fail to update Coach", 'x');
        console.error(error)
      },
      complete: () => { }
    })
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  


}
