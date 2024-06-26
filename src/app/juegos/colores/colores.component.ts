import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrl: './colores.component.css'
})
export class ColoresComponent implements OnInit {

  @Input() colorHexa!: string;
  @Input() habilitado!: boolean;

  @Output() onColorClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eventoClick(){

    if(this.habilitado)
    {
      this.habilitado = false;
      this.onColorClick.emit(this.colorHexa);
    }
  }

}