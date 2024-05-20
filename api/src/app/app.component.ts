import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductService } from './services/product/product.service';
import { PortadaComponent } from './components/portada/portada.component';
import { CategoryService } from './services/category/category.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, PortadaComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private categoriesService: CategoryService

  ) { }

 ngOnInit(): void {
  //this.productService.insertAllProducts().subscribe();
  //this.categoriesService.insertAllCategory().subscribe();
  }
  title = 'DigitalChef';

}
