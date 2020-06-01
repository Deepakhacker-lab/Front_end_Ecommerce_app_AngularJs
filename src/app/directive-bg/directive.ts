import { Directive, OnInit, ElementRef, Component } from '@angular/core';

@Directive({
    selector:'[Backgroundhighlight]'
})

export class Directivebg implements OnInit{
    constructor(private elmentref:ElementRef){

    }

    ngOnInit() {
        this.elmentref.nativeElement.style.backgroundColor='blue';
    }
}
