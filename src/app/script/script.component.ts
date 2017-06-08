import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'tcp-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScriptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
