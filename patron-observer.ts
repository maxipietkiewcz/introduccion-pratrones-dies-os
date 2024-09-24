// Clase observadora
class Soporte {
  public notificar(cambio: string): void {
    console.log(`Soporte notificado: ${cambio}`);
  }
}

// Clase que será observada
class Equipo {
  private observadores: Soporte[] = [];

  constructor(
    public nombre: string,
    public tipo: string,
    public estado: string
  ) {}

  public agregarObservador(observador: Soporte): void {
    this.observadores.push(observador);
  }

  public cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  private notificarObservadores(): void {
    for (const observador of this.observadores) {
      observador.notificar(
        `${this.nombre} ha cambiado su estado a ${this.estado}`
      );
    }
  }
}

// Ejemplo de uso
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
