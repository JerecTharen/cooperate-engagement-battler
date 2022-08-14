import { filter, fromEvent, map } from "rxjs";
import { ExtensionConstants } from "../types/extension-constants";
import $ from 'jquery';


const postClassName = 'occludable-update';
const idElementClassName = 'feed-shared-update-v2';
const idElementAttributeName = 'data-urn';
export default function ClickListener ({companyProfileHref}:ExtensionConstants){
  fromEvent<PointerEvent & {path: HTMLElement[]}>(document, 'click')
    .pipe(
      filter((click):boolean => {
        const parentPostElementList = click.path
          .filter(e => e.classList?.contains(postClassName) ?? false);
        if(parentPostElementList.length === 0)return false;

        return $(parentPostElementList[0])
          .children()
          .find(`a[href="${companyProfileHref}"]`).length > 0;
      }),
      map((click): Attr | null => {
        const parentPostElementList = click.path
          .filter(e => e.classList?.contains(postClassName) ?? false);
        return Array.from(parentPostElementList[0].children as HTMLCollection)
          .filter(e => 
            e.classList?.contains(idElementClassName) ?? false
          )[0]?.attributes.getNamedItem(idElementAttributeName);
      })
    )
    .subscribe({
      next: (click)=>{
        console.log('RxJs says: ');
        console.log(click);
      }
    });

    return (<span></span>);
}