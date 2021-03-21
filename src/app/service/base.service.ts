import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { id: number }> {

  entityName: string = '';
  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([])

  constructor(
    public http: HttpClient,
    public config: ConfigService,
    @Inject('entityName') entityName: string
  ) {
    this.entityName = entityName;
  }

  getAll(): void {
    this.http.get<T[]>(`${this.config.apiUrl}/${this.entityName}`)
      .subscribe(
        list => this.list$.next(list),
        err => console.error(err)
      );
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(`${this.config.apiUrl}/${this.entityName}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.config.apiUrl}/${this.entityName}`, entity)
      .pipe(
        tap(e => this.getAll())
      );
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(`${this.config.apiUrl}/${this.entityName}/${entity.id}`, entity);
  }

  remove(entity: T): Observable<T> {
    return this.http.delete<T>(`${this.config.apiUrl}/${this.entityName}/${entity.id}`)
  }

  like(key: string, value: string): Observable<T[]> {
    key = `${key}_like`;
    const query = `${this.config.apiUrl}/${this.entityName}?${key}=${value}`;
    return this.http.get<T[]>(query);
  }

  searchAll(value: string): Observable<T[]> {
    const query = `${this.config.apiUrl}/${this.entityName}?q=${value}`;
    return this.http.get<T[]>(query);
  }
}
