import { Component, OnInit } from '@angular/core';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  products={};
  constructor(private demo:  DemoService){

  }
  ngOnInit(): void {
    // this.demo.hello();
   // this.products=this.demo.product;
   this.demo.getUsers().subscribe((data=>{
    this.products=data;

   }))
    
  }
  isShow:boolean=true;
  condition:boolean=false;
  title = 'angularapp';
  value:string;
  fromParenttochild=' I am from parent component';
  
  GetValueFromChild(value){
    console.log(value);
    
  }
  submitValue(val){
      this.value=val.value;
  }
  OnDestroy(){
    this.isShow=false;
  }

  createPost(input:HTMLInputElement){
let post = { title : input.value};
this.demo.createPost({ post }).subscribe((res: any) => {
  console.log('createPost', res);
})
  }
}
