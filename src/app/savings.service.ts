import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Saving } from './saving';
import { SAVINGS } from './data';

@Injectable()
export class SavingsService {
  private _savings = new BehaviorSubject<Saving[]>([]);
  private dataStore: { savings: Saving[] } = { savings: []};

  constructor() { 
    SAVINGS.forEach(sa => this.add(sa));
  }

  get savings(): Observable<Saving[]> {
    return this._savings.asObservable();
  }

  public add(saving: Saving): void {
    this.dataStore.savings.push(saving);
    this._savings.next(Object.assign({}, this.dataStore).savings);
  }
}