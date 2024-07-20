import { Component, Input } from '@angular/core';

export enum Continent {
    Africa = 'africa',
    Antarctica = 'antarctica',
    Asia = 'asia',
    Europe = 'europe',
    NorthAmerica = 'north-america',
    Oceania = 'oceania',
    SouthAmerica = 'south-america',
    CentralAmerica = 'central-america',
}

export interface MarkerMap {
    top: number;
    left: number;
    color: string;
    tooltip: string;
}

@Component({
    selector: 'ax-interactive-map',
    standalone: true,
    imports: [],
    templateUrl: './interactive-map.component.html',
})
export class InteractiveMapComponent {
    @Input() continents?: Continent[];

    protected markerPositions: MarkerMap[] = [];

    private readonly continentToPosition = {
        [Continent.Africa]: { top: 105, left: 240 },
        [Continent.Antarctica]: { top: 220, left: 250 },
        [Continent.Asia]: { top: 50, left: 330 },
        [Continent.Europe]: { top: 57, left: 225 },
        [Continent.NorthAmerica]: { top: 60, left: 80 },
        [Continent.Oceania]: { top: 156, left: 380 },
        [Continent.SouthAmerica]: { top: 150, left: 140 },
        [Continent.CentralAmerica]: { top: 98, left: 86 },
    };

    private readonly markerColorForContinent = {
        [Continent.Africa]: 'rgb(248, 252, 255)',
        [Continent.Antarctica]: 'rgb(255, 74, 0)',
        [Continent.Asia]: '#e61e1e',
        [Continent.Europe]: '#e61e1e',
        [Continent.NorthAmerica]: 'rgb(97, 16, 16)',
        [Continent.Oceania]: '#e61e1e',
        [Continent.SouthAmerica]: 'rgb(231, 240, 255)',
        [Continent.CentralAmerica]: '#e61e1e',
    };

    ngOnInit(): void {
        if (this.continents) {
            this.continents.forEach((continent) => {
                const position = this.continentToPosition[continent];
                this.markerPositions.push({
                    top: position.top,
                    left: position.left,
                    color: this.markerColorForContinent[continent],
                    tooltip: continent.toString(),
                });
            });
        }
    }
}
