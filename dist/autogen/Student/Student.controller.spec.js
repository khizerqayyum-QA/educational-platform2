"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Student_dto_1 = require("./dtos/Student.dto");
const Student_controller_1 = require("./Student.controller");
const Student_service_1 = require("./Student.service");
const baseRequest = {
    parsed: {
        fields: [],
        paramsFilter: [],
        search: {},
        filter: [],
        or: [],
        join: [],
        sort: [],
        authPersist: undefined,
        limit: 10,
        offset: 0,
        page: 1,
        cache: undefined,
    },
    options: {},
};
describe('StudentController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Student_service_1.StudentService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Student_controller_1.StudentController],
            providers: [Student_service_1.StudentService, ApiServiceProvider],
        }).compile();
        controller = module.get(Student_controller_1.StudentController);
        spyService = module.get(Student_service_1.StudentService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call StudentController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call StudentController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Student_dto_1.Student();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Student.controller.spec.js.map