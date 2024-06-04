import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NzCarouselModule],
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {
  imgs: string[] = ["restaurant-2623071_1280.jpg", "house-5632318_1280.jpg", "food-3081324_1280.jpg", "cooking-8752869_1280.jpg"];

  constructor(private map: MapService) { }
  ngOnInit() {
    this.map.buildMap();
  }

}