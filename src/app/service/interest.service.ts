import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interest } from '../model/interest';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class InterestService extends BaseService<Interest> {

  constructor(
    public http: HttpClient,
    public config: ConfigService
  ) {
    super(http, config, 'interest')
  }
}
