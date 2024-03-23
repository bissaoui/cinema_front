import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {


  public  villes:any;
  public  cinemas:any;
  public  salles:any;
  public  pane: any;
  public  currentVille:any;
  public  currentSeance:any;
  public  currentCinema:any;
  public panne: any;

  constructor(public cinemaService:CinemaService) {
    this.cinemaService.getVilles()
    .subscribe(
      data=>{
        this.villes=data;
      },err=>{
        console.log(err);
      })
      this.pane="hide";
      this.panne="hide";

  }
  onSetSeance(arg0: any) {
    this.currentSeance=arg0;
  }
  
  onGetcinemas(v:any){
    this.pane="panel panel-default";
    this.currentVille=v.name;
    this.panne="hide";

    this.cinemaService.getCinemas(v).
    subscribe(
      data=>{
        this.cinemas=data;
      },err=>{
        console.log(err);
      })
    }
    onGetsalles(c: any) {
      this.panne="";

      this.currentCinema=c;
       this.cinemaService.getSalles(c).
       subscribe(
         data=>{
          this.salles=data;
          this.salles._embedded.salles.forEach((salle: any) => {
            this.cinemaService.getProjections(salle).
            subscribe(
              data2=>{
                salle.projections=data2
              },err=>{
                console.log(err);
              }
            )
          });
        },err=>{
          console.log(err);
        })

  
    }

  ngOnInit(): void {

  }

}
