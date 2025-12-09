import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Instructor } from './dtos/Instructor.dto';
import { InstructorService } from './Instructor.service';
export declare class InstructorController implements CrudController<Instructor> {
    service: InstructorService;
    constructor(service: InstructorService);
    get base(): CrudController<Instructor>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Instructor> | Instructor[]>;
    get(req: CrudRequest): Promise<Instructor>;
    create(req: CrudRequest, dto: Instructor): Promise<Instructor>;
    createMany(req: CrudRequest, dto: CreateManyDto<Instructor>): Promise<Instructor[]>;
    update(req: CrudRequest, dto: Instructor): Promise<Instructor>;
    replace(req: CrudRequest, dto: Instructor): Promise<Instructor>;
    delete(req: CrudRequest): Promise<void | Instructor>;
}
