export interface CrewMember {
  id: number;
  nome: string;
  especie: 'Humano 🧑' | 'Grey 👽' | 'Reptiliano 🦎' | 'Nórdico 👱‍♂️';
  funcao: string;
  estado: 'Ativo' | 'Em Missão' | 'De Férias' | 'Em Descanso';
  dataNascimentoCriacao: string;  // ISO Date string
  setor: string;
  contactosEmergencia: string;
  notas: string;
  avatarUrl?: string;
}
