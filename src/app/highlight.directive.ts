import { Directive, ElementRef, HostListener, HostBinding, Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = "white";
  @Input() highlightColor = "orange";

  @HostListener("mouseenter", ["$event"]) mouseover() {
    this.backgroundColor = this.highlightColor;
    console.log("Event Target" + event.target);
  }

  @HostListener("mouseleave") mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding("style.backgroundColor") get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor: string;

  // constructor(private elementRef: ElementRef, private renderer: Renderer) {
  //   // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  // }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
