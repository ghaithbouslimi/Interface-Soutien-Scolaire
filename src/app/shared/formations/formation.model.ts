import { ICoach } from "../coach/coach.model";
import { ICourse } from "../courses/course.model";

export interface IFormation{
    id? :string;
    titre : string;
    theme : string;
    duree : string;
    courses?: ICourse[];
    coach? : ICoach
}