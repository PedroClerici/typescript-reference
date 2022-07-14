var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Component from './base-component.js';
import { AutoBind } from '../decorators/auto-bind-decorator.js';
// Project Item Class:
export class ProjectItem extends Component {
    constructor(hostId, project) {
        super('single-project', hostId, 'beforeend', project.id);
        this.project = project;
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
        this.renderContent();
        this.attach();
    }
    get people() {
        if (this.project.numberOfPeople === 1) {
            return '1 person is assigned';
        }
        return this.project.numberOfPeople + ' people are assigned';
    }
    renderContent() {
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('h3').textContent = this.people;
        this.element.querySelector('p').textContent = this.project.description;
    }
    dragStartHandler(event) {
        event.preventDefault;
        event.dataTransfer.setData('text/plain', this.project.id);
        event.dataTransfer.effectAllowed = 'move';
    }
    dragEndHandler(event) {
    }
}
__decorate([
    AutoBind
], ProjectItem.prototype, "dragStartHandler", null);
//# sourceMappingURL=project-item.js.map