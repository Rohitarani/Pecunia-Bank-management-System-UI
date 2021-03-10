import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(item: any, searchValue:any): any {
    if(searchValue==""|| searchValue==null){
      return item;
    }
    else{
      return item.filter(itm=>{
         return itm.accountName.toLowerCase().indexOf(searchValue.toLowerCase())!=-1;
        //return itm.accountName.toLowerCase()==searchValue.toLowerCase();
      });
    }
  }

}
