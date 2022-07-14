import Component from './base-component.js';
import { Project } from '../models/project-model.js';
import { AutoBind } from '../decorators/auto-bind-decorator.js';
import { Draggable } from '../models/drag-and-drop-interfaces.js';

// Project Item Class:
export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable {
  private project: Project;

  private get people() {
    if (this.project.numberOfPeople === 1) {
      return '1 person is assigned';
    }
    return this.project.numberOfPeople + ' people are assigned';
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, 'beforeend', project.id);
    this.project = project;

    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);

    this.renderContent();
    this.attach();
  }

  private renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.people;
    this.element.querySelector('p')!.textContent = this.project.description;
  }

  @AutoBind
  dragStartHandler(event: DragEvent): void {
    event.preventDefault
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  dragEndHandler(event: DragEvent): void {
  }
}