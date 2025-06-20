// crew-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { CrewService } from '../../services/crew.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


// @Component({
//   selector: 'app-crew-form',
//   templateUrl: './crew-form.component.html',
// })

@Component({
  selector: 'app-crew-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './crew-form.component.html',
  styleUrls: ['./crew-form.component.scss'],
})
export class CrewFormComponent implements OnInit {
  form!: FormGroup;
  isEditMode = false;
  memberId?: number;
  showToast = false;
  toastMessage = '';

  especies = ['Humano 🧑', 'Grey 👽', 'Reptiliano 🦎', 'Nórdico 👱‍♂️'];
  estados = ['Ativo', 'Em Missão', 'De Férias', 'Em Descanso'];

  constructor(
    private fb: FormBuilder,
    private crewService: CrewService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.memberId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEditMode = !!this.memberId;

    this.form = this.fb.group({
      nome: ['', Validators.required],
      especie: ['', Validators.required],
      funcao: [''],
      estado: ['Ativo'],
      dataNascimentoCriacao: [''],
      setor: [''],
      contactosEmergencia: [''],
      notas: [''],
      avatarUrl: [''],
    });

    if (this.isEditMode) {
      const member = this.crewService.getById(this.memberId!);
      if (member) {
        this.form.patchValue(member);
      } else {
        alert('Membro não encontrado!');
        this.router.navigate(['/']);
      }
    }
  }

  isHumanLike(especie: string): boolean {
    return especie === 'Humano 🧑' || especie === 'Nórdico 👱‍♂️';
  }

  onSubmit() {
    if (this.form.invalid) return;

    const data = this.form.value;
    if (this.isEditMode) {
      this.crewService.update(this.memberId!, data);
      //alert('Membro atualizado com sucesso!');
      this.toastMessage = 'Membro atualizado com sucesso!';
    } else {
      this.crewService.add(data);
      //alert('Membro criado com sucesso!');
      this.toastMessage = 'Membro criado com sucesso!';
    }

    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
      this.router.navigate(['/']);
    }, 2000); // mostra o toast por 2 segundos
  }

  onCancel() {
    if (this.isEditMode) {
      this.router.navigate(['/details', this.memberId]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
