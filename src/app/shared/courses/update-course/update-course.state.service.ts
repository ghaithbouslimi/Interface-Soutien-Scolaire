import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export interface IChapter{
    _id?:string;
    title : string;
    content: string
}

@Injectable( {providedIn: 'root'})
export class UpdateCourseStateService{
   chapters:IChapter[]=[]
   
   chaptersSubjectBahvior$ = new BehaviorSubject<IChapter[]>([])
   chapters$ = this.chaptersSubjectBahvior$.asObservable()

   getChapters():Observable<IChapter[]>{
    return this.chapters$;
   }

   addChapter(chapter:IChapter){
    this.chapters.push(chapter);
    this.chaptersSubjectBahvior$.next(this.chapters)
   }

   loadChapters(chapters:IChapter[]){
    [...this.chapters]=chapters; 
    this.chaptersSubjectBahvior$.next(this.chapters)
   }

   removeChapter(id:string){
    this.chapters = this.chapters.filter(chapter => chapter._id !== id);
    this.chaptersSubjectBahvior$.next(this.chapters)
   }

}