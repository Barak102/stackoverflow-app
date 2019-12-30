import { IProvider } from './../types/IProvider.d';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowService implements IProvider {

  constructor() { }
}
