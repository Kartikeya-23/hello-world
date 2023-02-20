import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent implements OnInit {
  
  @Input()
  likesCount!: number;
  @Input()
  isActive!: boolean;

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  OnClick(){
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
