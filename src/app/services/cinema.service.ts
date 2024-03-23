import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  getProjections(salle: any) {
    return this.http.get((salle._links.projections.href).replace("{?projection}","?projection=p1"));
  }

  public host:string = "http://localhost:8080";

  constructor(private http:HttpClient) 
  {

  }
  public getVilles(){

    return this.http.get(this.host+"/villes");

  }

  public getCinemas(v:any){

    return this.http.get(v._links.cinemas.href);

  }
  public getSalles(c:any){

    return this.http.get(c._links.salles.href);

  }

}
