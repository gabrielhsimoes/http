import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, filter } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$!: Observable<any>;
  total!: number;
  readonly fields = 'name,description,version,homepage'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges
     .pipe(
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      // tap(value => console.log(value)),
      switchMap(value => this.http.get(this.SEARCH_URL, {
        params: {
          search: value,
          fields: this.fields
        }
      })),
      tap((res: any) => this.total = res.total),
      map((res: any) => res.results)
    );
  }

  onSearch() {
    
    let value = this.queryField.value;
    if(value && (value = value.trim()) !== ''){

      // const params = {
      //   search: value,
      //   fields: fields
      // };

      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', this.fields);

    this.results$ = this.http.get(this.SEARCH_URL, { params })
    .pipe(
      tap((res: any) => this.total = res.total),
      map((res: any) => res.results)
    );
  }
  }
}
