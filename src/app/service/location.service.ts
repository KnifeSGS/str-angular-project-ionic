import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../model/location';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends BaseService<Location> {

  constructor(
    public http: HttpClient,
    public config: ConfigService
  ) {
    super(http, config, 'interest')
  }
}
