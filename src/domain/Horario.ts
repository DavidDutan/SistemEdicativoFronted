import { Aula } from "./Aula";

export class Horario {
    horId?: BigInt;
    horDia?: string;
    horHoraEntrada?: string;
    horHoraSalida?: string;
    aula?: Aula;
    grupoAsignaturas?: BigInt;
}