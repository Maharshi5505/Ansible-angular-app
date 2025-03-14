import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { GameCardComponent } from '../../components/game-card/game-card.component';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [CommonModule, NgFor, GameCardComponent],
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'],
})
export class RecommendedComponent {
  games: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      console.log("Search Query:", params['q']); // Debugging

      // Dummy Recommended Games Data
      this.games = [
        { id: 1, title: 'Cyberpunk 2077', image: 'assets/game.jpg', rating: 8.5 },
        { id: 2, title: 'Red Dead Redemption 2', image: 'assets/game.jpg', rating: 9.2 },
        { id: 3, title: 'The Last of Us Part II', image: 'assets/game.jpg', rating: 9.5 },
        { id: 4, title: 'Ghost of Tsushima', image: 'assets/game.jpg', rating: 9.0 },
        { id: 5, title: 'Horizon Zero Dawn', image: 'assets/game.jpg', rating: 9.1 },
        { id: 6, title: 'Elden Ring', image: 'assets/game.jpg', rating: 9.7 },
        { id: 7, title: 'The Witcher 3', image: 'assets/game.jpg', rating: 9.8 },
        { id: 8, title: 'GTA V', image: 'assets/game.jpg', rating: 9.6 },
        { id: 3, title: 'The Last of Us Part II', image: 'assets/game.jpg', rating: 9.5 },
        { id: 3, title: 'The Last of Us Part II', image: 'assets/game.jpg', rating: 9.5 },
        { id: 3, title: 'The Last of Us Part II', image: 'assets/game.jpg', rating: 9.5 },
        { id: 3, title: 'The Last of Us Part II', image: 'assets/game.jpg', rating: 9.5 },
        { id: 3, title: 'The Last of Us Part II', image: 'assets/game.jpg', rating: 9.5 },
        { id: 3, title: 'The Last of Us Part II', image: 'assets/game.jpg', rating: 9.5 },
        { id: 3, title: 'The Last of Us Part II', image: 'assets/game.jpg', rating: 9.5 },
        { id: 3, title: 'The Last of Us Part II', image: 'assets/game.jpg', rating: 9.5 },
        { id: 3, title: 'The Last of Us Part II', image: 'assets/game.jpg', rating: 9.5 },
      ];
    });
  }
}
