import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { GameSectionComponent } from '../../components/game-section/game-section.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, HeaderComponent, GameSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {


  constructor(private router: Router) {}
  
    search() {
      // Simulating successful signup
      this.router.navigate(['/recommended']); // Redirect to home after signup
    }
    gameCategories = [
    {
      genre: 'Action Games',
      games: [
        {
          id: 1,
          title: 'Cyberpunk 2077',
          image: 'assets/game.jpg',
          rating: 8.5,
        },
        {
          id: 2,
          title: 'Red Dead Redemption 2',
          image: 'assets/game.jpg',
          rating: 9.2,
        },
        {
          id: 3,
          title: 'Cyberpunk 2077',
          image: 'assets/game.jpg',
          rating: 8.5,
        },
        {
          id: 4,
          title: 'Red Dead Redemption 2',
          image: 'assets/game.jpg',
          rating: 9.2,
        },
      ],
    },
    {
      genre: 'Adventure Games',
      games: [
        {
          id: 3,
          title: 'The Last of Us Part II',
          image: 'assets/game.jpg',
          rating: 9.5,
        },
        {
          id: 4,
          title: 'Ghost of Tsushima',
          image: 'assets/game.jpg',
          rating: 9.0,
        },
        {
          id: 5,
          title: 'Horizon Zero Dawn',
          image: 'assets/game.jpg',
          rating: 9.1,
        },
        {
          id: 5,
          title: 'Horizon Zero Dawn',
          image: 'assets/game.jpg',
          rating: 9.1,
        },
      ],
    },
    {
      genre: 'RPG Games',
      games: [
        {
          id: 5,
          title: 'Horizon Zero Dawn',
          image: 'assets/game.jpg',
          rating: 9.1,
        },
        {
          id: 5,
          title: 'Horizon Zero Dawn',
          image: 'assets/game.jpg',
          rating: 9.1,
        },
        {
          id: 5,
          title: 'Horizon Zero Dawn',
          image: 'assets/game.jpg',
          rating: 9.1,
        },
        {
          id: 5,
          title: 'Horizon Zero Dawn',
          image: 'assets/game.jpg',
          rating: 9.1,
        },
        
      ],
    },
  ];
}
