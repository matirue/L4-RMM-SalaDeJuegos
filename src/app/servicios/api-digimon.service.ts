import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDigimonService {

  constructor(private http: HttpClient) { }

  // https://digimon-api.vercel.app/
  public ObtenerDigimon(){
    return this.http.get("https://digimon-api.vercel.app/api/digimon");
  }
  
}
