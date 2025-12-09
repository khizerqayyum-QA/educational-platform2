import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Assignment } from './dtos/Assignment.dto';
import { AssignmentService } from './Assignment.service';
export declare class AssignmentController implements CrudController<Assignment> {
    service: AssignmentService;
    constructor(service: AssignmentService);
    get base(): CrudController<Assignment>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Assignment> | Assignment[]>;
    get(req: CrudRequest): Promise<Assignment>;
    create(req: CrudRequest, dto: Assignment): Promise<Assignment>;
    createMany(req: CrudRequest, dto: CreateManyDto<Assignment>): Promise<Assignment[]>;
    update(req: CrudRequest, dto: Assignment): Promise<Assignment>;
    replace(req: CrudRequest, dto: Assignment): Promise<Assignment>;
    delete(req: CrudRequest): Promise<void | Assignment>;
}
