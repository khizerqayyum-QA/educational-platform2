"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentModule = void 0;
const common_1 = require("@nestjs/common");
const Assignment_entity_1 = require("./Assignment.entity");
const typeorm_1 = require("@nestjs/typeorm");
const Assignment_service_1 = require("./Assignment.service");
const Assignment_controller_1 = require("./Assignment.controller");
let AssignmentModule = class AssignmentModule {
};
exports.AssignmentModule = AssignmentModule;
exports.AssignmentModule = AssignmentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Assignment_entity_1.Assignment])],
        providers: [Assignment_service_1.AssignmentService],
        exports: [Assignment_service_1.AssignmentService],
        controllers: [Assignment_controller_1.AssignmentController],
    })
], AssignmentModule);
//# sourceMappingURL=Assignment.module.js.map