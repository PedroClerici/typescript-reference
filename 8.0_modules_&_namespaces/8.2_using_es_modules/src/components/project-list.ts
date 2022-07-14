import Component from './base-component.js';
import { projectState } from '../state/project-state.js';
import { Project, ProjectStatus } from '../models/project-model.js';
import { ProjectItem } from './project-item.js';
import { AutoBind } from '../decorators/auto-bind-decorator.js';
import { DragTarget } from '../models/drag-and-drop-interfaces.js';

// Project List Class:
export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
  assignedProjects: Project[] = [];
  typeName: 'active' | 'finished';

  constructor(private type: ProjectStatus) {
    super('project-list', 'app', 'beforeend');

    this.typeName = (type ? 'finished' : 'active');
    this.element.id = `${this.typeName}-projects`;

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter(project => project.status === this.type);
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    })

    this.element.addEventListener('dragover' , this.dragOverHandler);
    this.element.addEventListener('dragleave' , this.dragLeaveHandler);
    this.element.addEventListener('drop' , this.dropHandler);

    this.renderContent();
    this.attach();
  }

  @AutoBind
  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      const listEl = this.element.querySelector('ul')!;
      listEl.classList.add('droppable');
    }
  }

  @AutoBind
  dropHandler(event: DragEvent): void {
    event.preventDefault();
    const projectId = event.dataTransfer!.getData('text/plain');
    projectState.moveProject(projectId, this.type);
  }

  @AutoBind
  dragLeaveHandler(event: DragEvent): void {
    const listEl = this.element.querySelector('ul')!;
    listEl.classList.remove('droppable');
  }

  private renderProjects() {
    const listEl = <HTMLUListElement>document.getElementById(`${this.typeName}-projects-list`)!;
    listEl.innerHTML = '';

    for (const projectItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, projectItem);
    }
  }

  private renderContent() {
    const listId = `${this.typeName}-projects-list`;
    this.element.querySelector('ul')!.id = listId;

    this.element.querySelector('h2')!.textContent =
      (this.typeName.toUpperCase()) + ' PROJECTS';
  }
}