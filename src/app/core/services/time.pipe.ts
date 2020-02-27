import { Pipe, PipeTransform, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
     if(value > 0 && value/60 < 1) {
       return value + ' Minutes';

     } else {
       return value/60 + ' Hour(s)';
     }
  }
}
@NgModule({
  imports:      [ CommonModule ],
  declarations: [ TimePipe],
  exports: [TimePipe]
})
export class TimePipeModule { }
