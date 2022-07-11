import { AbstractControl } from "@angular/forms";

export function testUserName(regExp:RegExp){
    return (control:AbstractControl)=>{
        const tester=regExp.test(control.value)
        return tester ? {"invalidname" : {value:control.value}} : null
    }
}