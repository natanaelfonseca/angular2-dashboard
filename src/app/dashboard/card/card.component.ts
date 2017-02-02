import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  id: number;

  @Input()
  urlImagem: string;

  @Input()
  titulo: string;

  @Input()
  subTitulo: string;

  constructor() {
  }
  
}
