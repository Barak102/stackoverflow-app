import { IProvider } from './../types/IProvider.d';
import { Injectable } from '@angular/core';
import { Subject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpSearchService {

  public questionsResults$: Subject<any> = new Subject<any>();
  private providers: IProvider[] = [
    {
      name: 'stackoverflow',
      getUrl: (param: string) => `https://api.stackexchange.com/2.2/tags/${param}/faq?site=stackoverflow`,
      mapHandling: (results: any) => {
        return results;
      }
    }
  ];


  constructor(private http: HttpClient) { }


  getProvider(name: string): IProvider {
    return this.providers.find(p => p.name === name);
  }

  public search(selectedProvider: IProvider, searchText: string): void {
    this.http.get(selectedProvider.getUrl(searchText))
      .pipe(
        map(res => selectedProvider.mapHandling(res)))
      .subscribe(results => {
        this.questionsResults$.next(results.items);
      }
      );
  }
}

