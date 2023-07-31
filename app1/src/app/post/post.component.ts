import { Component, OnInit, Input , ViewChild, AfterViewInit } from '@angular/core';
import {PostListComponent} from '../post-list/post-list.component'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit, AfterViewInit {
  
  title :string = "default post title"

  postParentMsg : string = "Message from parent"

  childMsg :string | undefined;

  @Input()
  msgFromParent: string | undefined;

  @ViewChild(PostListComponent) childComp: any;


  constructor(){}

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
    this.childMsg = this.childComp.msgParent
  }

  receiveMessage($event: any) {
    console.log($event)
  }
}
