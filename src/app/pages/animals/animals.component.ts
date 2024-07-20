import { Component } from '@angular/core';

import { AnimalService } from '../../services/animal.service';
import {
    Continent,
    InteractiveMapComponent,
} from '../../components/interactive-map/interactive-map.component';

@Component({
    selector: 'app-animals',
    standalone: true,
    imports: [InteractiveMapComponent],
    templateUrl: './animals.component.html',
})
export class AnimalsComponent {
    continent: Continent[] = [
        Continent.NorthAmerica,
        Continent.SouthAmerica,
        Continent.CentralAmerica,
        Continent.Africa,
        Continent.Asia,
        Continent.Europe,
        Continent.Oceania,
        Continent.Antarctica,
    ];

    constructor(private animalService: AnimalService) {}

    ngOnInit(): void {
        //this.getAnimals();
    }

    getAnimals() {
        this.animalService.getAnimals('dog').subscribe((data) => {
            const locations = data.map((animal) => animal.locations);
            console.log(new Set(locations.flat()));
        });
    }
}
