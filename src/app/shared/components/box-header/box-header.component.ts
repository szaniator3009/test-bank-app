import { Component, Input } from '@angular/core';
import { URL_IMAGES } from 'src/app/const/urls';

@Component({
  selector: 'app-box-header',
  templateUrl: './box-header.component.html',
})
export class BoxHeaderComponent {
  @Input() title: string;
  @Input() image: string;
  urlImages = URL_IMAGES;
}
