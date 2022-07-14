// Drag & Drop Interfaces:
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

enum ProjectStatus { Active, Finished }

// Project Type:
class Project {
  constructor (
    public id: string,
    public title: string,
    public description: string,
    public numberOfPeople: number,
    public status: ProjectStatus
  ) {}

}

// Listener Type:
type Listener = (items: Project[]) => void;

// Project State Management
class ProjectState {
  private listeners: Listener[] = [];
  private projects: Project[] = [];
  private static instance: ProjectState | null = null;

  static getInstance(): ProjectState {
    if (!this.instance) {
      return this.instance = new ProjectState();
    }

    return this.instance;
  }

  private constructor() {}

  addProject(title: string, description: string, numberOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numberOfPeople,
      ProjectStatus.Active
    )
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find(project => project.id === projectId)
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  addListener(listenerFunction: Listener) {
    this.listeners.push(listenerFunction);
  }

  private updateListeners() {
    for (const listenerFunction of this.listeners) {
      listenerFunction(this.projects.slice());
    }
  }
}

const projectState = ProjectState.getInstance();

// Validation:
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number,
  max?: number,
}

function validate(validatableInput: Validatable) {
  let isValid = true;

  if (validatableInput.required) {
    isValid = 
      isValid && validatableInput.value.toString().trim().length !== 0;
  }

  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }

  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }

  if (
    validatableInput.min != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid =
      isValid && validatableInput.value >= validatableInput.min;
  }

  if (
    validatableInput.max != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid =
      isValid && validatableInput.value <= validatableInput.max;
  }

  return isValid;
}

// Auto bind decorator:
function AutoBind(
  target: object,
  methodName: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const bindFunction = originalMethod.bind(this);
      return bindFunction;
    }
  }

  return adjustedDescriptor;
}

// Component Base Class:
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;
  insertPosition: 'beforeend' | 'afterbegin';

  constructor(
    templateElementId: string,
    hostElementId: string,
    insertPosition: 'beforeend' | 'afterbegin',
    newElementId?: string
  ) {
    this.templateElement = <HTMLTemplateElement>document.getElementById(templateElementId);
    this.hostElement = <T>document.getElementById(hostElementId);
    this.insertPosition = insertPosition;


    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = <U>importedNode.firstElementChild;

    if (newElementId) {
      this.element.id = newElementId;
    };
  }

  protected attach() {
    this.hostElement.insertAdjacentElement(this.insertPosition , this.element);
  }
}

// Project Item Class:
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable{
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

// Project List Class:
class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
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
    ProjectState.getInstance().moveProject(projectId, this.type);
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

// Project Input Class:
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', 'afterbegin', 'user-input');

    this.titleInputElement = <HTMLInputElement>this.element.querySelector('#title');
    this.descriptionInputElement = <HTMLInputElement>this.element.querySelector('#description');
    this.peopleInputElement = <HTMLInputElement>this.element.querySelector('#people');

    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle, 
      required: true,
      minLength: 5,
    }

    const descriptionValidatable: Validatable = {
      value: enteredDescription, 
      required: true,
      minLength: 5,
    }

    const peopleValidatable: Validatable = {
      value: enteredPeople, 
      required: true,
      min: 1,
    }

    if (
      validate(titleValidatable) &&
      validate(descriptionValidatable) &&
      validate(peopleValidatable)
    ) {
      return [enteredTitle, enteredDescription, +enteredPeople];
    } else {
      alert('Invalid input, please try again!');
      return;
    }
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput()
    if (userInput instanceof Array) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.clearInputs();
    }
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList(ProjectStatus.Active);
const finishedProjectList = new ProjectList(ProjectStatus.Finished);
