
export class apiMemoriales {
    idProducto: number;
    codigo: string;
    nombreprod: string;
    precio: number;
    cantidad: number;
    fechaNacimiento: string;
    rut: number;
    dv: string;
    enfermedad: string;
    fonocontacto: number;
    categoria: string;
    editorial: string;
    raza: string;
    edad: number;
    altura: number;
    hrini: string;
    hrfin: string;
    direccion: string;
    fCreacion: string;



      constructor(obj: any){
          this.idProducto = obj && obj.idProducto || null
          this.codigo = obj && obj.codigo || null
          this.nombreprod = obj && obj.nombreprod || null
          this.precio = obj && obj.precio || null
          this.cantidad = obj && obj.cantidad || null
          this.fechaNacimiento = obj && obj.fechaNacimiento || null
          this.rut = obj && obj.rut || null
          this.dv = obj && obj.dv || null
          this.enfermedad = obj && obj.enfermedad || null
          this.fonocontacto = obj && obj.fonocontacto || null
          this.categoria = obj && obj.categoria || null
          this.editorial = obj && obj.editorial || null
          this.raza = obj && obj.raza || null
          this.edad = obj && obj.edad || null
          this.altura = obj && obj.altura || null
          this.hrini = obj && obj.hrini || null
          this.hrfin = obj && obj.hrfin || null
          this.direccion = obj && obj.direccion || null
          this.fCreacion = obj && obj.fCreacion || null
          
      }
  }
  