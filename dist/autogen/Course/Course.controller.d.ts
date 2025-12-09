import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Course } from './dtos/Course.dto';
import { CourseService } from './Course.service';
export declare class CourseController implements CrudController<Course> {
    service: CourseService;
    constructor(service: CourseService);
    get base(): CrudController<Course>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Course> | Course[]>;
    get(req: CrudRequest): Promise<Course>;
    create(req: CrudRequest, dto: Course): Promise<Course>;
    createMany(req: CrudRequest, dto: CreateManyDto<Course>): Promise<Course[]>;
    update(req: CrudRequest, dto: Course): Promise<Course>;
    replace(req: CrudRequest, dto: Course): Promise<Course>;
    delete(req: CrudRequest): Promise<void | Course>;
}
