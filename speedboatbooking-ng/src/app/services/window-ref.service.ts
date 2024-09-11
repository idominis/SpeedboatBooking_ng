import { Injectable } from '@angular/core';

function _window(): any {
  // Povratak stvarnog `window` objekta samo ako postoji
  return typeof window !== 'undefined' ? window : null;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {
  get nativeWindow(): any {
    return _window();
  }
}
