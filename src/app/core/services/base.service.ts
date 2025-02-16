import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService<T> {
      protected readonly baseUrl: string = `${environment.API_URL}`;

      constructor(protected http: HttpClient, serviceAPI: string) {
            this.baseUrl = `${this.baseUrl}/${serviceAPI}`;
            console.log('baseUrl:', this.baseUrl);
      }

      // Lấy danh sách (GET /api/xxx)
      getAll(params?: HttpParams | { [param: string]: string | number }): Observable<T[]> {
            return this.http.get<T[]>(this.baseUrl, { params });
      }

      // Lấy thông tin 1 item (GET /api/xxx/:id)
      getById(id: number | string): Observable<T> {
            return this.http.get<T>(`${this.baseUrl}/${id}`);
      }

      // Tạo mới (POST /api/xxx)
      create(data: Partial<T>): Observable<T> {
            return this.http.post<T>(this.baseUrl, data);
      }

      // Cập nhật (PUT /api/xxx/:id)
      update(id: number | string, data: Partial<T>): Observable<T> {
            return this.http.put<T>(`${this.baseUrl}/${id}`, data);
      }

      // Xoá (DELETE /api/xxx/:id)
      delete(id: number | string): Observable<void> {
            return this.http.delete<void>(`${this.baseUrl}/${id}`);
      }
}
