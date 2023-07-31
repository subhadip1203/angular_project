import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  childMsg :string = "message fro child"

  childMsg2 :string = "child component message by output"

  imgUrl :string = "https://picsum.photos/200/300"

  redColorTrue:boolean = true;
  
  @Input()
  msgParent: string | undefined;

  @Output() messageEvent = new EventEmitter <string>()

  constructor(){}

  ngOnInit(): void {
      
  }

  sendMessageToParents() {
    this.messageEvent.emit(this.childMsg2)
  }

}
