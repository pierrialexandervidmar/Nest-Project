import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/courses.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Angular',
            description: 'Curso de Angular',
            tags: ['Angular', 'Frontend', 'Javascript']
        },
        {
            id: 2,
            name: 'React',
            description: 'Curso de React',
            tags: ['React', 'Typescript', 'Frontend']
        }
    ]

    findAll(): Course[] {
        return this.courses;
    }

    findOne(id: number): Course {
        const course = this.courses.find(course => course.id === id);
        if(!course) {
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND);
        }
        return course;
    }

    create(createCourseDTO: any): void {
        this.courses.push(createCourseDTO);
        return createCourseDTO;
    }

    update(id: number, updateCourseDTO: any): void {
        const existingCourse = this.findOne(id);
        if(existingCourse) {
            const index = this.courses.findIndex(course => course.id === id)
            this.courses[index] = {
                id,
                ...updateCourseDTO
            };
        }
    }

    remove(id: number): void {
        const index = this.courses.findIndex(course => course.id === id)
        if(index >= 0) {
            this.courses.splice(id, 1);
        }
    }
}
