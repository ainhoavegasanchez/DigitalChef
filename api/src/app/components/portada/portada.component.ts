import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NzCarouselModule],
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent {
imgs:string[]= ["restaurant-2623071_1280.jpg", "house-5632318_1280.jpg", "food-3081324_1280.jpg", "cooking-8752869_1280.jpg"];

ngOnInit(): void {
//  this.initMap();
}
//TODO:
/*
initMap(): void {
  const uluru = { lat: 37.227837, lng: -95.700513 };
  const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    zoom: 8,
    center: uluru
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}*/
}

