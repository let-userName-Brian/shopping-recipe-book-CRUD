import { Directive, HostBinding, HostListener } from "@angular/core";
//custom directive to do the drop down --- not needed for this app because im using angular Material

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirtective {
  @HostBinding('class.open') isOpen = false;
  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}