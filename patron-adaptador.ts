// Clase antigua de inventario
class InventarioViejo {
  private items: { nombre: string; tipo: string; estado: string }[] = [];

  public agregarItem(nombre: string, tipo: string, estado: string): void {
    this.items.push({ nombre, tipo, estado });
  }

  public getItems(): { nombre: string; tipo: string; estado: string }[] {
    return this.items;
  }
}

// Adaptador que convierte la interfaz antigua a la nueva
class AdaptadorInventario {
  constructor(private inventarioViejo: InventarioViejo) {}

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.inventarioViejo.agregarItem(nombre, tipo, estado);
  }

  public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
    return this.inventarioViejo.getItems();
  }
}

// Ejemplo de uso
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
