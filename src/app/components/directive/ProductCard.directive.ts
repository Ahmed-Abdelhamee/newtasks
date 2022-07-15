import { Directive ,ElementRef, OnInit,HostListener, Input} from "@angular/core";

@Directive({
    selector:"[setShadow]"
})

export class Productard implements OnInit{

    constructor(private elemnt:ElementRef){}
   
    private bgColor(color:string){
        this.elemnt.nativeElement.style.backgroundColor=color
    }


    @Input() setShadow=''

    @HostListener('mouseenter') move() {
        this.elemnt.nativeElement.style.boxShadow=" 0px 4px 107px white"
    }
    @HostListener('mouseleave') out() {
        this.elemnt.nativeElement.style.boxShadow=" 0px 4px 7px white"
    }

    @HostListener('click') click() {
        this.bgColor(this.setShadow)
    }

    ngOnInit(): void{
        this.elemnt.nativeElement.style.margin="20px"
        this.elemnt.nativeElement.style.padding="10px"
        this.elemnt.nativeElement.style.boxShadow=" 0px 4px 7px white"
    }
}

