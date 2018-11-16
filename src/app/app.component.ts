import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2048';
  undo = false;
  reset=false;
  finalScore= 0;

  updateScore($event){
    console.log('Score updated',$event);
    this.finalScore = $event;
  }
}
