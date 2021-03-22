import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Connection } from '../model/connection';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService extends BaseService<Connection> {

  constructor(
    public http: HttpClient,
    public config: ConfigService
  ) {
    super(http, config, 'interest')
  }
}
