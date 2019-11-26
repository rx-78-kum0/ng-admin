import { Injectable } from '@angular/core';
import { ModelEnum } from './vim.config';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class VimService {
  model$ = new BehaviorSubject<ModelEnum>(0);
  keyboardRecords$ = new BehaviorSubject<number[]>([]);

  constructor() {}

  setModel(model: ModelEnum) {
    this.model$.next(model);
  }

  clearKeyboardRecords() {
    this.keyboardRecords$.next([]);
  }
}