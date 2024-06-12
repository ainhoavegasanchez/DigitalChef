import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map!: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  lat = 36.743697863947595;
  lng = -4.483154519894109;
  zoom = 20;

  constructor() {
    this.mapbox.accessToken = environment.mapBoxToken;
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    const marker = new mapboxgl.Marker()
      .setLngLat([-4.483154519894109, 36.743697863947595])
      .addTo(this.map);
      this.map.boxZoom.enable();
  }
}