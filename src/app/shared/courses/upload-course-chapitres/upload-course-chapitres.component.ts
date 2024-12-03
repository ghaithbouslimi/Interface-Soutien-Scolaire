
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  humanizeBytes,
  UploaderOptions,
  UploadFile,
  UploadInput,
  UploadOutput,
} from 'ngx-uploader';

import * as environment from 'src/environments/environment';

@Component({
  selector: 'app-upload-course-chapitres',
  templateUrl: './upload-course-chapitres.component.html',
  styleUrls: ['./upload-course-chapitres.component.scss'],
})
export class UploadCourseChapitresComponent implements OnInit {
  @Input() courseId: string;
  @Output() uploadFileEvent: EventEmitter<boolean> = new EventEmitter();

  formData: FormData;
  files: UploadFile[];
  public uploadInput: EventEmitter<UploadInput>;
  humalizeBytes: Function;
  dragOver: boolean;
  public options: UploaderOptions;

  constructor() {
    this.options = { concurrency: 1, maxUploads: 1 };
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humalizeBytes = humanizeBytes;
  }
  onUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        // uncomment this if you want to auto upload files when added
        this.startUpload();
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.files.push(output.file);
        }
        break;
      case 'uploading':
        if (typeof output.file !== 'undefined') {
          // update current data in files array for uploading file
          const index = this.files.findIndex(
            (file) =>
              typeof output.file !== 'undefined' && file.id === output.file.id
          );
          this.files[index] = output.file;
        }
        break;
      case 'removed':
        // remove file from array when removed
        this.files = this.files.filter(
          (file: UploadFile) => file !== output.file
        );
        break;
      case 'dragOver':
        this.dragOver = true;
        break;
      case 'dragOut':
      case 'drop':
        this.dragOver = false;
        break;
      case 'done':
        console.log(
          `%c file aploaded `,
          'background-color:tomato;color:white'
        );
        this.uploadFileEvent.emit(true);
        break;
    }
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: `${environment.environment.API_URL}/courses/ressources/${this.courseId}`,
      method: 'PUT',
      data: { courseId: this.courseId },
      fieldName: 'chapter',
    };

    this.uploadInput.emit(event);
  }

 
  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }
  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  get f(){
    return this.myForm.controls;
  }
  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  } 
  ngOnInit(): void {}
}
