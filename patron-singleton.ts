class Inventario {
  private static instancia: Inventario;
  private equipos: { nombre: string; tipo: string; estado: string }[] = [];

  // Constructor privado para garantizar que solo se pueda crear una instancia de la clase
  private constructor() {}

  public static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.equipos.push({ nombre, tipo, estado });
  }

  public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
    return this.equipos;
  }
}

// Ejemplo de uso
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());
