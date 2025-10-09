import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

 @Directive({ 
  selector: '[appPreventDoubleClick]'
 }) 

 export class PreventDoubleClickDirective { 
  @Input() 
  cooldownMilliseconds = 1000; 
  // Default cooldown of 1 second 
  constructor(private el: ElementRef, private renderer: Renderer2){} 

  @HostListener('click') 
  onClick() {
     // Disable the button
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true'); // Re-enable it after the cooldown period 
      setTimeout(() => { 
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled'); 
      }, this.cooldownMilliseconds); 
    }
   }  