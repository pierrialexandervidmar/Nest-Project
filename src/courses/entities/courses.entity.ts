import { Entity } from 'typeorm';

@Entity()
export class Course {
    id: number;
    name: string;
    description: string;
    tags: string[]
}