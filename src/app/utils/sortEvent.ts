import { School } from '../interfaces/school' 


export type SortColumn = keyof School | '';
export type SortDirection = 'asc' | 'desc' | '';

export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
}