import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "../../../core/services/base.service";


@Injectable({
      providedIn: 'root',
})
export class UserService extends BaseService<any> {
      constructor(http: HttpClient) {
            super(http, 'users');
      }



}