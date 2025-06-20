// crew-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CrewService } from '../../services/crew.service';
import { CrewMember } from '../../../models/crew-member.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-crew-list',
//   templateUrl: './crew-list.component.html',
//   styleUrls: ['./crew-list.component.css'],
// })
@Component({
  selector: 'app-crew-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.scss']
})
export class CrewListComponent implements OnInit {
  crew: CrewMember[] = [];

  constructor(private crewService: CrewService, private router: Router) {}

  ngOnInit(): void {
    this.loadCrew();
  }

  loadCrew() {
    this.crew = this.crewService.getAll();
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  goToEdit(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteMember(id: number) {
    if (confirm('Tem a certeza que quer eliminar este membro?')) {
      this.crewService.delete(id);
      this.loadCrew();
      alert('Membro eliminado com sucesso!');
    }
  }

  createNew() {
    this.router.navigate(['/create']);
  }

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'Ativo': return 'estado-ativo';
      case 'Em Missão': return 'estado-missao';
      case 'De Férias': return 'estado-ferias';
      case 'Em Descanso': return 'estado-descanso';
      default: return '';
    }
  }
}
