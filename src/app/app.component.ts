import { Component } from '@angular/core';
import Hero from "./";
//import Hero from './hero';

@Component({
  selector: 'my-app',
  template: `
            <h1>{{ title }}</h1>
            <h2>{{hero.name}} details!</h2>
            <div><label>Id: </label>{{ hero.id }}</div>
            <div>
                <label>Name: </label>
                <input value = "{{ hero.name }}" placeholder="name">
            </div>

            <!--<p>Heroes:</p>
            <ul>
                <li *ngFor="let hero of heroes">
                    {{ hero.name }}
                </li>
            </ul>
            <p *ngIf="heroes.length > 3">There are many heroes!</p>-->
            `
})

export class AppComponent  {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: "Windstorm"
    };
    //heroes = [
    //    new Hero (1, 'Windstorm'),
    //    new Hero (13, 'Bombasto'),
    //    new Hero (15, 'Magneta'),
    //    new Hero (20, 'Tornado')
    //];
    //myHero = this.heroes[0].name;
}

class Hero {
    id: number;
    name: string
}
