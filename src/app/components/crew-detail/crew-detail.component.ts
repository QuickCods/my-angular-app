// crew-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CrewService } from '../../services/crew.service';
import { CrewMember } from '../../../models/crew-member.model';
import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-crew-detail',
//   templateUrl: './crew-detail.component.html',
// })

@Component({
  selector: 'app-crew-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.scss']
})
export class CrewDetailComponent implements OnInit {
  member?: CrewMember;
  showToast = false;
  toastMessage = '';

  constructor(
    private route: ActivatedRoute,
    private crewService: CrewService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.member = this.crewService.getById(id);
    if (!this.member) {
      alert('Membro não encontrado!');
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  goToEdit() {
    if (this.member) this.router.navigate(['/edit', this.member.id]);
  }

  deleteMember() {
    // tinha que tirar o confirm para nao funcionar como alert
    // para poder funcionar com o toast
  if (this.member && confirm('Tem a certeza que quer eliminar este membro?')) {
    this.crewService.delete(this.member.id);
    
    this.toastMessage = 'Membro eliminado com sucesso!';
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
      this.router.navigate(['/']);
    }, 2500); // 2.5 segundos antes de redirecionar
  }
}

  getAvatarUrl(url?: string): string {
    return url?.trim() ? url : 'https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png';
  }
  
}
