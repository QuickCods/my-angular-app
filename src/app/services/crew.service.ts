import { Injectable } from '@angular/core';
import { CrewMember } from '../../models/crew-member.model';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  private crewList: CrewMember[] = [
    {
      id: 1,
      nome: 'John Doe',
      especie: 'Humano 🧑',
      funcao: 'Capitão Sénior',
      estado: 'Ativo',
      dataNascimentoCriacao: '2080-05-10',
      setor: 'Ponte de Comando',
      contactosEmergencia: 'Jane Doe - +123456789',
      notas: 'Líder da missão',
      avatarUrl: 'https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=0%2C0%2C1920%2C1080',
    },
    // outros membros iniciais
    {
      id: 2,
      nome: 'Capitão Valerius',
      especie: 'Humano 🧑',
      funcao: 'Capitão',
      estado: 'Ativo',
      dataNascimentoCriacao: '2075-03-15',
      setor: 'Ponte de Comando',
      contactosEmergencia: 'Alferes Silva (Interno)',
      notas: 'Líder carismático e estratégico.',
    },
    {
      id: 3,
      nome: 'Zara Xylos',
      especie: 'Grey 👽',
      funcao: 'Navegador',
      estado: 'Em Missão',
      dataNascimentoCriacao: 'Desconhecida',
      setor: 'Navegação',
      contactosEmergencia: 'Comando Central (Anonimizado)',
      notas: 'Especialista em rotas intergalácticas complexas.',
    },
    {
      id: 4,
      nome: "Dr. K'tharr",
      especie: 'Reptiliano 🦎',
      funcao: 'Médico Chefe',
      estado: 'Ativo',
      dataNascimentoCriacao: '345 Ciclos Estelares',
      setor: 'Enfermaria',
      contactosEmergencia: 'Protocolo Médico',
      notas: 'Conhecimentos avançados em fisiologia alienígena.',
    },
    {
      id: 5,
      nome: 'Elara Frost',
      especie: 'Nórdico 👱‍♂️',
      funcao: 'Engenheira de Sistemas',
      estado: 'Em Descanso',
      dataNascimentoCriacao: '2102-11-22',
      setor: 'Engenharia',
      contactosEmergencia: 'Família Estelar',
      notas: 'Mente brilhante na otimização de motores de dobra.',
    },
    {
      id: 6,
      nome: 'Mikael Sol',
      especie: 'Humano 🧑',
      funcao: 'Oficial de Comunicações',
      estado: 'Ativo',
      dataNascimentoCriacao: '2088-07-01',
      setor: 'Comunicações',
      contactosEmergencia: 'Base Terra',
      notas: 'Fluente em mais de 100 línguas cósmicas.',
    },
    {
      id: 7,
      nome: "Jax R'tharr",
      especie: 'Grey 👽',
      funcao: 'Técnico de Campo',
      estado: 'Em Missão',
      dataNascimentoCriacao: 'Desconhecida',
      setor: 'Manutenção Exterior',
      contactosEmergencia: 'Nenhum',
      notas: 'Especialista em reparos de emergência no vácuo.',
    },
    {
      id: 8,
      nome: 'Sargento Viss',
      especie: 'Reptiliano 🦎',
      funcao: 'Chefe de Segurança',
      estado: 'Ativo',
      dataNascimentoCriacao: '298 Ciclos Estelares',
      setor: 'Segurança',
      contactosEmergencia: 'Protocolo de Defesa',
      notas: 'Mestre em combate tático e estratégico.',
    },
    {
      id: 9,
      nome: 'Astrid Lunaris',
      especie: 'Nórdico 👱‍♂️',
      funcao: 'Oficial Científico',
      estado: 'Ativo',
      dataNascimentoCriacao: '2095-04-10',
      setor: 'Laboratório de Pesquisa',
      contactosEmergencia: 'Academia Galáctica',
      notas: 'Focada em astrofísica e anomalias espaciais.',
    },
  ];

  private nextId = 10;

  getAll() {
    return [...this.crewList]; // retorna cópia para evitar manipulação externa
  }

  getById(id: number): CrewMember | undefined {
    return this.crewList.find(m => m.id === id);
  }

  add(member: Omit<CrewMember, 'id'>) {
    const newMember: CrewMember = { id: this.nextId++, ...member };
    this.crewList.push(newMember);
    return newMember;
  }

  update(id: number, updatedMember: Omit<CrewMember, 'id'>) {
    const index = this.crewList.findIndex(m => m.id === id);
    if (index !== -1) {
      this.crewList[index] = { id, ...updatedMember };
      return true;
    }
    return false;
  }

  delete(id: number) {
    this.crewList = this.crewList.filter(m => m.id !== id);
  }
}
