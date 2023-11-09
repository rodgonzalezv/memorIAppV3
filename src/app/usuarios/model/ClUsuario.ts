
export class ClUsuario {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    clave: string;

      constructor(obj: any){
          this.id = obj && obj.id || null
          this.first_name = obj && obj.first_name || null
          this.last_name = obj && obj.last_name || null
          this.email = obj && obj.email || null
          this.clave = obj && obj.clave || null
      }
  }
  