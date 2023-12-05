import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

  @Input()
  public title : string = 'Sin Título'

}
