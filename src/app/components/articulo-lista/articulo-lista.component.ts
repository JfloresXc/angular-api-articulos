import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import Categoria from 'src/app/models/Categoria.model';
import { ArticulosService } from 'src/app/services/articulo/articulos.service';
import { CategoriasService } from 'src/app/services/categoria/categorias.service';

@Component({
  selector: 'app-articulo-lista',
  templateUrl: './articulo-lista.component.html',
  styleUrls: ['./articulo-lista.component.css'],
})
export class ArticuloListaComponent implements OnInit {
  categorias: any[] = [];
  articulos: any[] = [];
  articulosPreviews: any[] = [];
  displayedColumns: string[] = [
    'idarticulo',
    'nombre',
    'descripcion',
    'precio',
  ];
  selectedValue: any;

  constructor(
    private articulosService: ArticulosService,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe((categoriasKeys: any) => {
      this.categorias = categoriasKeys;
    });

    this.articulosService.getArticulos().subscribe((articulosKeys: any) => {
      this.articulos = articulosKeys;
      this.articulosPreviews = articulosKeys;
    });
  }

  onChange(event: any) {
    const { value } = event;

    if (value === 'todos') {
      this.articulosPreviews = this.articulos;
      return;
    }

    let idSelected = 0;
    this.categorias.forEach((categoriaKey) => {
      if (categoriaKey.categoria === value) {
        idSelected = categoriaKey.idcategoria;
      }
    });

    this.articulosPreviews = this.articulos.filter((articuloKey) => {
      return articuloKey.idcategoria === idSelected;
    });
  }
}
