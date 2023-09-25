export class Rectificado {
    id: number;
    cliente: {
      nombre: string;
    };
    operario: {
      nombre: string;
      apellido: string;
      dni: string;
      fecha: string;
    };
    motores: {
      marca: string;
      modelo: string;
      fabricacion: string;
    }[];
    insumo: {
      nombre: string;
      stock: number;
      precio: number;
    };
    fecha: string;
    estado: {
      descripcion: string;
    };
    total: number;
  
    constructor() {
      this.id = 0;
      this.cliente = {
        nombre: ''
      };
      this.operario = {
        nombre: '',
        apellido: '',
        dni: '',
        fecha: ''
      };
      this.motores = [
        {
          marca: '',
          modelo: '',
          fabricacion: ''
        }
      ];
      this.insumo = {
        nombre: '',
        stock: 0,
        precio: 0
      };
      this.fecha = '';
      this.estado = {
        descripcion: ''
      };
      this.total = 0;
    }
  }
  