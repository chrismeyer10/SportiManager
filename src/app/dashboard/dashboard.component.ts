import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  teams = [
    'Bayer Leverkusen',
    'Bayern Munich',
    'Borussia Dortmund',
    'RB Leipzig',
    'SC Freiburg',
    'VfB Stuttgart',
    'Eintracht Frankfurt',
    'Union Berlin',
    'Wolfsburg',
    'Borussia Mönchengladbach',
    'Werder Bremen',
    'Hoffenheim',
    'Augsburg',
    'Bochum',
    'Heidenheim',
    'Mainz 05',
    'Cologne',
    'Darmstadt 98'
  ];
  selectedTeam = '';

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
