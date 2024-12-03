import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-chapter-form',
  templateUrl: './add-chapter-form.component.html',
  styleUrls: ['./add-chapter-form.component.scss']
})
export class AddChapterFormComponent implements OnInit {

  canBeClosed = true;
  primaryButtonText = 'Save Chapter';
  showCancelButton = true;
  currentContent:any='';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };


  chapterForm:FormGroup;  ;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddChapterFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      this.chapterForm=this.fb.group({
        title: ['', Validators.required],
        content: [''],
       
      })
  }


  ngOnInit(): void {
    this.chapterForm.patchValue({'content':''})
  }

  get f(){
    return this.chapterForm.controls;
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.chapterForm.value });
  }

  close() {
    this.dialogRef.close();
  }


}
