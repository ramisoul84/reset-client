import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client, Data, User } from "../_models/client";
import { environment } from "../../environments/environment";
import { tap } from "rxjs";



@Injectable()
export class MaillingService {
    private readonly apiUrl = `${environment.apiUrl}`; 
    constructor(private http:HttpClient) {
    }


    getAllClients(page:number) {
        return this.http.get<Data>(`${this.apiUrl}/list/${page}`, {
        });
      }

    createClient(client: Client) {
        return this.http
          .post(`${this.apiUrl}/register`, client, {
         
          })
    }

    login(user:User) {
      return this.http
        .post<{ token: string }>(`${this.apiUrl}/login`, user, {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        })
        .pipe(
          tap((response) => {
            localStorage.setItem('auth_token', response.token);
          })
        );
    }
  
    logout() {
      localStorage.removeItem('auth_token');
    }
  
    isLoggedIn(): boolean {
      return !!localStorage.getItem('auth_token');
    }
  
    getToken(): string | null {
      return localStorage.getItem('auth_token');
    }

}