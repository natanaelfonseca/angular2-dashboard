import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {

  id: number;

  constructor(aRoute: ActivatedRoute) {
      this.id = aRoute.snapshot.params['id'];
   }

}
