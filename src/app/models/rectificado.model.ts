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
    lineaPedidos: {
      cantidad: string;
      insumo: {
        nombre: string;
        precio: number;
      };
    }[];
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
      this.lineaPedidos =[ {
        cantidad: '',
        insumo: {
          nombre: '',
          precio: 0,
        }
      }];
      this.fecha = '';
      this.estado = {
        descripcion: ''
      };
      this.total = 0;
    }
  }
  