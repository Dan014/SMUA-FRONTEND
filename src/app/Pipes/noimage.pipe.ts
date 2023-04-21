import{Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'noimage'
})

export class NoimagePipe implements PipeTransform{
    transform(image:any):string{
        console.log("entro" + image);
        if(image == null){
            console.log("entro if");
            return'assets/noimage.jpg'
            
        }
        else{
            console.log("entro else"+image);

            return image;
        }
    }
}