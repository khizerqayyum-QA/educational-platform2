"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Course_dto_1 = require("./dtos/Course.dto");
const Course_controller_1 = require("./Course.controller");
const Course_service_1 = require("./Course.service");
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
describe('CourseController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Course_service_1.CourseService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Course_controller_1.CourseController],
            providers: [Course_service_1.CourseService, ApiServiceProvider],
        }).compile();
        controller = module.get(Course_controller_1.CourseController);
        spyService = module.get(Course_service_1.CourseService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call CourseController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call CourseController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Course_dto_1.Course();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Course.controller.spec.js.map