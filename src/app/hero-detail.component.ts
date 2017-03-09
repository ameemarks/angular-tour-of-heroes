import {Component, Input} from '@angular/core';
import {Hero} from "./hero";

@Component ({
    selector: 'my-hero-detail',
    template: `
            <div *ngIf="selectedHero">
                <h2>{{selectedHero.name}} details!</h2>
                <div><label>Id: </label>{{ selectedHero.id }}</div>
                <div>
                    <label>Name: </label>
                    <input [(ngModel)]="selectedHero.name" placeholder="name">
                </div>
            </div>
`
})


export class HeroDetailComponent {
    hero: Hero;
}
