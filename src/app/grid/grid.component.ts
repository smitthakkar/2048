import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public currentScore: number;
  @Input()
  public reset: boolean;
  @Input()
  public undo: boolean;
  @Input()
  public size:number;
  @Output()
  public score: EventEmitter<number>;
  constructor() {
    this.score = new EventEmitter<number>();
  }

  computeCurrentScore() {
    this.currentScore = 0;
    console.log('Current Score in Grid Component : ' + this.currentScore);
    this.score.next(this.currentScore);
  }
  ngOnChanges() {
    console.log('Input/Output Changed');
    if (this.reset) {
      console.log('Reset')
    }
    if (this.undo) {
      console.log('Undo')
    }
    this.computeCurrentScore();
  }
  ngOnInit() {
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyPressEvent(event: KeyboardEvent) {
    switch(event.key){
      case "ArrowUp": console.log('Up Key Pressed');break;
      case "ArrowLeft": console.log('Left Key Pressed');break;
      case "ArrowRight": console.log('Right Key Pressed');break;
      case "ArrowDown": console.log('Down Key Pressed');
    }
  }
}
