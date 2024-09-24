// Clases específicas para cada tipo de equipo
class Notebook {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  public detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  public detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  public detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

// Factory para crear equipos
class EquipoFactory {
  public crearEquipo(
    tipo: string,
    nombre: string,
    ram: string,
    procesador: string
  ) {
    switch (tipo) {
      case "Notebook":
        return new Notebook(nombre, ram, procesador);
      case "Desktop":
        return new Desktop(nombre, ram, procesador);
      case "Servidor":
        return new Servidor(nombre, ram, procesador);
      default:
        throw new Error("Tipo de equipo no soportado");
    }
  }
}

// Ejemplo de uso
const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());
