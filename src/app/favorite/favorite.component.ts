import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite')
  isFavorite: boolean = false; 

  @Output() change = new EventEmitter();
  constructor() { }
  // isFavorite: boolean = false;
  ngOnInit(): void {
  }
  // isActive: boolean = false;
  isActiveBtn(){
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }
}
