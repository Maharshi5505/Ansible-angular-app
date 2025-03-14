import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { GameCardComponent } from '../../components/game-card/game-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule, GameCardComponent],
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent {
  game: any;
  similarGames: any[] = [];

  games = [
    {
      id: 1,
      title: 'Cyberpunk 2077',
      image: 'assets/game.jpg',
      rating: 8.5,
      genre: 'Action RPG',
      description: 'An open-world action RPG set in Night City.',
      developer: 'CD Projekt Red',
      publisher: 'CD Projekt',
      system: {
        os: 'Windows 10',
        cpu: 'Intel i5-3570K',
        gpu: 'NVIDIA GTX 970',
        ram: '8GB',
        storage: '70GB',
      },
    },
    {
      id: 2,
      title: 'Red Dead Redemption 2',
      image: 'assets/game.jpg',
      rating: 9.2,
      genre: 'Action',
      description: 'An epic tale in America’s heartland.',
      developer: 'Rockstar Games',
      publisher: 'Rockstar',
      system: {
        os: 'Windows 10',
        cpu: 'Intel i7-4770K',
        gpu: 'GTX 1060',
        ram: '12GB',
        storage: '150GB',
      },
    },
    {
      id: 3,
      title: 'The Last of Us Part II',
      image: 'assets/game.jpg',
      rating: 9.5,
      genre: 'Action Adventure',
      description: 'A deeply emotional story in a post-apocalyptic world.',
      developer: 'Naughty Dog',
      publisher: 'Sony',
      system: {
        os: 'Windows 10',
        cpu: 'Intel i5-6600K',
        gpu: 'GTX 1070',
        ram: '16GB',
        storage: '100GB',
      },
    },
    {
      id: 4,
      title: 'Ghost of Tsushima',
      image: 'assets/game.jpg',
      rating: 9.0,
      genre: 'Action',
      description: 'Explore 13th-century Japan in a breathtaking journey.',
      developer: 'Sucker Punch',
      publisher: 'Sony',
      system: {
        os: 'Windows 10',
        cpu: 'Intel i5-8400',
        gpu: 'GTX 1080',
        ram: '16GB',
        storage: '80GB',
      },
    },
    {
      id: 5,
      title: 'Horizon Zero Dawn',
      image: 'assets/game.jpg',
      rating: 9.1,
      genre: 'Open World RPG',
      description: 'Survive in a world overrun by machines.',
      developer: 'Guerrilla Games',
      publisher: 'Sony',
      system: {
        os: 'Windows 10',
        cpu: 'Intel i5-6500',
        gpu: 'GTX 970',
        ram: '12GB',
        storage: '75GB',
      },
    },
  ];

  constructor(private route: ActivatedRoute,private router : Router) {
    this.route.params.subscribe((params) => {
      const gameId = parseInt(params['id'], 10);

      this.game = this.games.find((g) => g.id === gameId);

      // ✅ Show up to 4 similar games from the same genre (excluding the current game)
      this.similarGames = this.games
        .filter((g) => g.id !== gameId) // Exclude the current game
        .slice(0, 4); // Limit to 4 similar games

      
    });

    
  }

  goBack() {
    this.router.navigate(['/home']); 
  }
}
