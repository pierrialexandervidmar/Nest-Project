import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Course)
        private readonly coursesRepository: Repository<Course>
    ) {

    }

    async findAll(): {
        return this.coursesRepository.find();
    }

    async findOne(id: number): Course {
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
