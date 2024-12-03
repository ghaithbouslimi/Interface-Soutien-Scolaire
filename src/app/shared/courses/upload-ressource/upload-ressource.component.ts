import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { humanizeBytes, UploaderOptions, UploadFile, UploadInput, UploadOutput } from 'ngx-uploader';
import * as environment from 'src/environments/environment';

@Component({
  selector: 'app-upload-ressource',
  templateUrl: './upload-ressource.component.html',
  styleUrls: ['./upload-ressource.component.scss']
})
export class UploadRessourceComponent implements OnInit {
  @Input() courseId: string;
  @Output() uploadRessourseEvent:EventEmitter<boolean> = new EventEmitter();
  
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
          const index = this.files.findIndex((file) => typeof output.file !== 'undefined' && file.id === output.file.id);
          this.files[index] = output.file;
        }
        break;
      case 'removed':
        // remove file from array when removed
        this.files = this.files.filter((file: UploadFile) => file !== output.file);
        break;
      case 'dragOver':
        this.dragOver = true;
        break;
      case 'dragOut':
      case 'drop':
        this.dragOver = false;
        break;
      case 'done':
        console.log(`%c Picture Uploaded `, 'background-color:tomato;color:white');
        this.uploadRessourseEvent.emit(true);
        break;
    }
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: `${environment.environment.API_URL}/courses/Ressourse/${this.courseId}`,
      method: 'PUT',
      data: { courseId: this.courseId },
      fieldName:'cover'
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
  ngOnInit() {
  }

}
