import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
  


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {

  heroes: any[]= [];
  termino : string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService) { 

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes= this._heroeService.buscarHeroes(params['termino']);
      // console.log(params['termino']);
    });
  }

}
