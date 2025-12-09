"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Assignment_dto_1 = require("./dtos/Assignment.dto");
const Assignment_controller_1 = require("./Assignment.controller");
const Assignment_service_1 = require("./Assignment.service");
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
describe('AssignmentController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Assignment_service_1.AssignmentService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Assignment_controller_1.AssignmentController],
            providers: [Assignment_service_1.AssignmentService, ApiServiceProvider],
        }).compile();
        controller = module.get(Assignment_controller_1.AssignmentController);
        spyService = module.get(Assignment_service_1.AssignmentService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call AssignmentController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call AssignmentController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Assignment_dto_1.Assignment();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Assignment.controller.spec.js.map