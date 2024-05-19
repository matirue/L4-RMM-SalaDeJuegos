import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;
  public usuario: any = {};  

  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { 
    afAuth.authState.subscribe(user=>{
        this.isLogged = user;
        this.usuario.email = user?.email;
        this.usuario.uid = user?.uid; 
    });
  }  

  /**  Iniciar sesion */
  async login(email: string, password: string) {
    try {
      const retorno = await this.afAuth.signInWithEmailAndPassword(email, password);

      if (retorno) {
        // Guarda el email y la fecha actual en Firestore
        const userDocRef = this.firestore.collection('users').doc(retorno.user?.uid);
        userDocRef.set({
          email: retorno.user?.email,
          loginDate: new Date() // Fecha actual
        });

        return retorno;
      } else {
        return null;
      }
    } catch (error) {
      console.log('Error en el login -> ', error);
      return null;
    }
  }

 

  /**
   * Registra en la db a un nuevo usuario
   * @param user
   */
  async register(email: string, password: string){

    try{
        const retorno = await this.afAuth.createUserWithEmailAndPassword(email, password);
        // Guarda el email y la fecha actual en Firestore
        const userDocRef = this.firestore.collection('users').doc(retorno.user?.uid);
        userDocRef.set({
          email: retorno.user?.email,
          loginDate: new Date() // Fecha actual
        });

        return retorno; 
    }catch(error){
        console.log('Error en el registro -> ', error);
        return null;
    }
  }

  /** Cerrar la sesion del usuario */
  async logout(){
    try{
      await this.afAuth.signOut();
    }catch(error){
      console.log('Error en el logout -> ', error);
    }

  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(this.isLogged).toPromise();
  }

}
