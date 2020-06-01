import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  constructor(private elref:ElementRef ,private renderer: Renderer2) { }


  ngOnInit(): void {
    this.renderer.setStyle(this.elref.nativeElement,'background-color','black');
  }

}
