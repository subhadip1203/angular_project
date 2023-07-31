import { Component } from '@angular/core';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})

export class FormElementComponent {

  userName :string = '';

  onKeyUp(event: any){
    console.log(event.key)
  }

  onKeyUpEnter(event: any){
    console.log(event.target.value)
  }

  getUserName(username: string){
    console.log(username)
  }

  userNameChange(){
    console.log(this.userName)
  }
}
