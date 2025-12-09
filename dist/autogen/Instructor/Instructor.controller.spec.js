"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Instructor_dto_1 = require("./dtos/Instructor.dto");
const Instructor_controller_1 = require("./Instructor.controller");
const Instructor_service_1 = require("./Instructor.service");
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
describe('InstructorController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Instructor_service_1.InstructorService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Instructor_controller_1.InstructorController],
            providers: [Instructor_service_1.InstructorService, ApiServiceProvider],
        }).compile();
        controller = module.get(Instructor_controller_1.InstructorController);
        spyService = module.get(Instructor_service_1.InstructorService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call InstructorController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call InstructorController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Instructor_dto_1.Instructor();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Instructor.controller.spec.js.map