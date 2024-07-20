import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from '../utils/base-url';
import { Observable } from 'rxjs';

export interface Animal {
    name: string;
    taxonomy: Taxonomy;
    locations: string[];
    characteristics: Characteristics;
}

export interface Taxonomy {
    kingdom: string;
    phylum: string;
    class: string;
    order: string;
    family: string;
    genus: string;
    scientific_name: string;
}

export interface Characteristics {
    prey: string;
    name_of_young: string;
    group_behavior: string;
    biggest_threat: string;
    most_distinctive_feature: string;
    'other_name(s)': string;
    gestation_period: string;
    litter_size: string;
    diet: string;
    type: string;
    common_name: string;
    number_of_species: string;
    location: string;
    group: string;
    color: string;
    skin_type: string;
    lifespan: string;
    length: string;
    age_of_sexual_maturity: string;
}

@Injectable({
    providedIn: 'root',
})
export class AnimalService {
    constructor(private http: HttpClient) {}

    getAnimals(name: string): Observable<Animal[]> {
        const endpoint = BaseUrl.addParams('/animals', {
            name,
        });

        return this.http.get<Animal[]>(endpoint);
    }
}
