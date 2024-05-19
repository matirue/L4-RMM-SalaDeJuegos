import { Component, OnInit } from '@angular/core';
import { ApiDigimonService } from '../../servicios/api-digimon.service';
import { GameScoresService } from '../../servicios/game-scores.service';

@Component({
  selector: 'app-preguntados',
  standalone: false,  
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent implements OnInit {

  numero: number = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  vamos: boolean = false;

  puntos: number = 0;
  vidas: number = 3;
  vidasTotal: number = 3;
  win: boolean = false;
  lose: boolean = false;
  mensajeFinal: string = '';
  mensajeWin: string = '';
  mensajeLose: string = '';
  smsFinal: boolean = false;


  //imagenes
  imgDigimon: any;
  tsunomon: any;  
  birdramon: any;  
  kabuterimon: any;  
  wizardmon: any;  
  imperialdramon: any;  
  myotismon: any;  
  omnimon: any; 
  wormmon:any;
  ikkakumon:any;
  guardromon:any;
  agumon:any;

  /**pregunta */
  hacerPregunta!: string;
  rta!: string;

  /**bonotnes */
  boton_1!: string;
  boton_2!: string;
  boton_3!: string;
  boton_4!: string;
 
  
  /**PREGUNTAS 
  *       0 numero de pregunta 
  *       1 ->pregunta  
  *       2 al 5 -> opciones
  *       6 -> indice de la respuesta correcta
  */
  pregunta_01: string[] = ['1', '¿Quién es el compañero de Tsunomon?', 'Yagami Taichi', 'Ishida Yamato', 'Ash ketchum', 'Gohan', '3'];
  pregunta_02: string[] = ['2', '¿Qué tipo de digimon es Birdramon?', 'Champion', 'Rookie', 'Volador', 'Fuego', '2'];
  pregunta_03: string[] = ['3', 'Kabuterimon es la evolución de:', 'Agumon', 'Etemon', 'Palmon', 'Tentomon', '5'];
  pregunta_04: string[] = ['4', '¿A quienes protegió Wizardmon, dando su vida?', 'Sora y Piyomon', 'Izzy y Tentomon', 'Tichi y Agumon', 'Kari y Gatomon', '5'];
  pregunta_05: string[] = ['5', '¿En qué temporada aparece Imperialdramon?', 'Digimon Tamers', 'Digimon Frontier', 
                                                                        'Digimon Adventure 02', 'Digimon Adventure', '4'];
  pregunta_06: string[] = ['6', 'Omnimon es el resultado de la fusión de:', 'WarGreymon y MetalGarurumon', 
                                                                            'ExVeemon y Paildramon', 
                                                                            'Angewomon y LadyDevimon', 
                                                                            'Gabumon', 
                                                                            '2'];
  pregunta_07: string[] = ['7', '¿Quién es el compañero digimon de Ken Ichijouji?', 'Gatomon', 'Wormmon', 'Leomon', 'Veemon', '3']; 
  pregunta_08: string[] = ['8', 'Ikkakumon junto al emblema de la Sinceridad logra su Megaevolución a', 'Lillymon', 'Etemon', 'Leomon', 'Zudomon', '5']; 
  pregunta_09: string[] = ['9', 'Guadromon aparece en:', 'No existe', 'Digimon Adventure Tri', 'Digimon Tamers', 'Digimon Adventure', '4']; 
  pregunta_10: string[] = ['10', '¿Quién es el compañero digimon de Agumon?', 'Yagami Taichi', 'Takeru Takaishi', 'Yagami Yagami', 'Ishida Yamato', '1']; 

  constructor(
    private apiDigimon: ApiDigimonService,
    public res: GameScoresService) 
  {
    //this.numero = Math.floor(Math.random() * (10 - 1)+1), //console.log(this.numero),
    //this.Iniciar();

    console.log(parseInt(this.pregunta_02[0]));

    this.apiDigimon.ObtenerDigimon().subscribe( (digimon: any) => { 
      console.log(digimon);
        this.tsunomon = digimon[1];
        this.birdramon = digimon[20];
        this.kabuterimon = digimon[22];
        this.wizardmon = digimon[74];
        this.imperialdramon = digimon[199];
        this.omnimon = digimon[209],
        this.wormmon = digimon[178], 
        this.ikkakumon = digimon[27],
        this.guardromon = digimon[140],
        this.agumon = digimon[7]
    } )
  }

  ngOnInit(): void {
  }

  Iniciar()
  {
      this.vamos = true;

      // this.hacerPregunta = this.pregunta_01[1];
      // this.boton_1 = this.pregunta_01[2];
      // this.boton_2 = this.pregunta_01[3];
      // this.boton_3 = this.pregunta_01[4];
      // this.boton_4 = this.pregunta_01[5];

      // this.imgDigimon = this.tsunomon;

      // this.rta = this.pregunta_01[6];
         
      this.SiguienteRonda(this.numero);

      console.log("inicio: rta -> ", this.rta);
  } 

  SiguienteRonda(numero: number){

    console.log(this.numero);

    if(this.numero == parseInt(this.pregunta_01[0]))
    {
      this.hacerPregunta = this.pregunta_01[1];
      this.boton_1 = this.pregunta_01[2];
      this.boton_2 = this.pregunta_01[3];
      this.boton_3 = this.pregunta_01[4];
      this.boton_4 = this.pregunta_01[5];

      this.imgDigimon = this.tsunomon;

      this.rta = this.pregunta_01[6];
      //console.log("rta del if -> "); console.log(this.rta);
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_02[0]))
    {
      this.imgDigimon = this.birdramon;

      this.hacerPregunta = this.pregunta_02[1];
      this.boton_1 = this.pregunta_02[2];
      this.boton_2 = this.pregunta_02[3];
      this.boton_3 = this.pregunta_02[4];
      this.boton_4 = this.pregunta_02[5];

      this.rta = this.pregunta_02[6];
      //console.log("rta del if -> "); console.log(this.rta);
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_03[0]))
    {
      this.imgDigimon = this.kabuterimon;

      this.hacerPregunta = this.pregunta_03[1];
      this.boton_1 = this.pregunta_03[2];
      this.boton_2 = this.pregunta_03[3];
      this.boton_3 = this.pregunta_03[4];
      this.boton_4 = this.pregunta_03[5];

      this.rta = this.pregunta_03[6];  
      //console.log("rta del if -> "); console.log(this.rta);  
      
      //this.numero++;      
    }
    if(this.numero == parseInt(this.pregunta_04[0]))
    {
      this.imgDigimon = this.wizardmon;

      this.hacerPregunta = this.pregunta_04[1];
      this.boton_1 = this.pregunta_04[2];
      this.boton_2 = this.pregunta_04[3];
      this.boton_3 = this.pregunta_04[4];
      this.boton_4 = this.pregunta_04[5];

      this.rta = this.pregunta_04[6];
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_05[0]))
    {
      this.imgDigimon = this.imperialdramon;

      this.hacerPregunta = this.pregunta_05[1];
      this.boton_1 = this.pregunta_05[2];
      this.boton_2 = this.pregunta_05[3];
      this.boton_3 = this.pregunta_05[4];
      this.boton_4 = this.pregunta_05[5];

      this.rta = this.pregunta_05[6];
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_06[0]))
    {
      this.imgDigimon = this.omnimon;

      this.hacerPregunta = this.pregunta_06[1];
      this.boton_1 = this.pregunta_06[2];
      this.boton_2 = this.pregunta_06[3];
      this.boton_3 = this.pregunta_06[4];
      this.boton_4 = this.pregunta_06[5];

      this.rta = this.pregunta_06[6];
      //console.log("rta del if -> "); console.log(this.rta);
    } 
    if(this.numero == parseInt(this.pregunta_07[0])) {
        this.imgDigimon = this.wormmon;
  
        this.hacerPregunta = this.pregunta_07[1];
        this.boton_1 = this.pregunta_07[2];
        this.boton_2 = this.pregunta_07[3];
        this.boton_3 = this.pregunta_07[4];
        this.boton_4 = this.pregunta_07[5];
  
        this.rta = this.pregunta_07[6];
        //console.log("rta del if -> "); console.log(this.rta);
    }
    if(this.numero == parseInt(this.pregunta_08[0])) {
        this.imgDigimon = this.ikkakumon;
  
        this.hacerPregunta = this.pregunta_08[1];
        this.boton_1 = this.pregunta_08[2];
        this.boton_2 = this.pregunta_08[3];
        this.boton_3 = this.pregunta_08[4];
        this.boton_4 = this.pregunta_08[5];
  
        this.rta = this.pregunta_08[6];
        //console.log("rta del if -> "); console.log(this.rta);
    }
    if(this.numero == parseInt(this.pregunta_09[0])) {
        this.imgDigimon = this.guardromon;
  
        this.hacerPregunta = this.pregunta_09[1];
        this.boton_1 = this.pregunta_09[2];
        this.boton_2 = this.pregunta_09[3];
        this.boton_3 = this.pregunta_09[4];
        this.boton_4 = this.pregunta_09[5];
  
        this.rta = this.pregunta_09[6];
        //console.log("rta del if -> "); console.log(this.rta);
    } 
    if(this.numero == parseInt(this.pregunta_10[0])) {
      this.imgDigimon = this.agumon;

      this.hacerPregunta = this.pregunta_10[1];
      this.boton_1 = this.pregunta_10[2];
      this.boton_2 = this.pregunta_10[3];
      this.boton_3 = this.pregunta_10[4];
      this.boton_4 = this.pregunta_10[5];

      this.rta = this.pregunta_10[6];
      //console.log("rta del if -> "); console.log(this.rta);
    }  
  }

  Control(boton: number){

    if(boton == parseInt(this.rta) && this.vidas>0 && this.puntos < 3){
      this.mensajeWin = 'Correcto!';
      this.win = true;
      this.lose = false;
      this.numero++;  
      this.puntos++;
      
      this.SiguienteRonda(this.numero);
      
    }
    else if(boton != parseInt(this.rta) && this.vidas>0 && this.puntos < 3){
      this.mensajeLose = 'Incorrencto!';
      this.win = false;
      this.lose = true;
      this.rta = '';
      this.numero++;  
      this.vidas--;  

      this.SiguienteRonda(this.numero);
    }



    if(this.puntos === 3){
      
      this.res.agregarResultado('Win', 'Preguntados');

      this.mensajeFinal = 'GANASTE!!!';
      this.rta = '';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;
    }


    if(this.vidas === 0){

      this.res.agregarResultado('Lose', 'Preguntados');

      this.mensajeFinal = 'Fin del juego!!!';
      this.rta = '';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;
    }  
  }

  Repetir(){
    this.numero = 1;
    this.vidas = 3;
    this.puntos = 0;
    this.win = false;
    this.lose = false;
    this.smsFinal = false;
    this.rta = '';

    this.Iniciar();

  }
  

}
