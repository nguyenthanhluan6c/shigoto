import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-error-well',
  templateUrl: './component.html',
  styleUrls: [ './component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorWellComponent {
  @Input() statusCode$: Observable<number>;
}
