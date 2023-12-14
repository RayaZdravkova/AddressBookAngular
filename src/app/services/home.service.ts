import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service to fetch filtered user data.
 * @class HomeService
 */
@Injectable({
  providedIn: 'root'
})

export class HomeService {
  /** The API URL for user data. */
  private apiUrl = 'https://localhost:7012/api/users';

   /**
   * Creates an instance of HomeService.
   * @param {HttpClient} http - The HTTP client for making requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Fetches filtered users based on specified parameters.
   * @param {string} name - The name of the user to filter.
   * @param {string} city - The city of the user to filter.
   * @param {string} country - The country of the user to filter.
   * @param {number} gender - The gender of the user to filter.
   * @returns {Observable<any>} - An observable containing filtered user data.
  */
  getFilteredUsers(name: string, city: string, country: string, gender: number): Observable<any> {
    const queryUrl = `${this.apiUrl}?name=${name}&city=${city}&country=${country}&gender=${gender}`;
    return this.http.get<any>(queryUrl);
  }
}
