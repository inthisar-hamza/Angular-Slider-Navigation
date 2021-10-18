import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { toggle } from 'ionicons/icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidebar') sideBar: any;
  @ViewChild('li') subMenu: any;

  constructor(private renderer: Renderer2, private elem: ElementRef) { }

  ngOnInit(): void {
  }

  menu = false;



  mouseEnter(){
    this.sideBar.nativeElement.className  = 'sidebar open';
 }

  mouseEnterHome(){
  this.sideBar.nativeElement.className  = 'sidebar close';
  }

  
  toggle(e: HTMLElement){
    console.log(e)
    if(this.menu){
      e.setAttribute("class", "");
      this.menu = false;
    }else{
      e.setAttribute("class", "showMenu")
      this.menu = true;
    }
    
 }

 setAllToClose(){
  const elements = this.elem.nativeElement.querySelectorAll('li');
  elements.forEach((element:any) => {
   if(element){
     element.setAttribute("class", "none")
   }
});
 }
    

  toggleMenu(){
    console.log(this.subMenu);
    
    this.setAllToClose();
    

    if(this.menu){
      this.menu = false;
      this.sideBar.nativeElement.className  = 'sidebar close';
      
    }else{
      this.menu = true;
      this.sideBar.nativeElement.className  = 'sidebar open';
    }
  }

}
