import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Student } from './dtos/Student.dto';
import { StudentService } from './Student.service';
export declare class StudentController implements CrudController<Student> {
    service: StudentService;
    constructor(service: StudentService);
    get base(): CrudController<Student>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Student> | Student[]>;
    get(req: CrudRequest): Promise<Student>;
    create(req: CrudRequest, dto: Student): Promise<Student>;
    createMany(req: CrudRequest, dto: CreateManyDto<Student>): Promise<Student[]>;
    update(req: CrudRequest, dto: Student): Promise<Student>;
    replace(req: CrudRequest, dto: Student): Promise<Student>;
    delete(req: CrudRequest): Promise<void | Student>;
}
