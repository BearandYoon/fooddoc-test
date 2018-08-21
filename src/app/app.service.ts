import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'http://dev.api.fooddocs.ee/testtask';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url).pipe(
      map((x: any) => x)
    );
  }
}
