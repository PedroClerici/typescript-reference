"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Component Base Class:
var App;
(function (App) {
    class Component {
        constructor(templateElementId, hostElementId, insertPosition, newElementId) {
            this.templateElement = document.getElementById(templateElementId);
            this.hostElement = document.getElementById(hostElementId);
            this.insertPosition = insertPosition;
            const importedNode = document.importNode(this.templateElement.content, true);
            this.element = importedNode.firstElementChild;
            if (newElementId) {
                this.element.id = newElementId;
            }
            ;
        }
        attach() {
            this.hostElement.insertAdjacentElement(this.insertPosition, this.element);
        }
    }
    App.Component = Component;
})(App || (App = {}));
// Auto bind decorator:
var App;
(function (App) {
    function AutoBind(target, methodName, descriptor) {
        const originalMethod = descriptor.value;
        const adjustedDescriptor = {
            configurable: true,
            enumerable: false,
            get() {
                const bindFunction = originalMethod.bind(this);
                return bindFunction;
            }
        };
        return adjustedDescriptor;
    }
    App.AutoBind = AutoBind;
})(App || (App = {}));
// Project State Management (Singleton Architecture):
var App;
(function (App) {
    class ProjectState {
        constructor() {
            this.listeners = [];
            this.projects = [];
        }
        static getInstance() {
            if (!this.instance) {
                return this.instance = new ProjectState();
            }
            return this.instance;
        }
        addProject(title, description, numberOfPeople) {
            const newProject = new App.Project(Math.random().toString(), title, description, numberOfPeople, App.ProjectStatus.Active);
            this.projects.push(newProject);
            this.updateListeners();
        }
        moveProject(projectId, newStatus) {
            const project = this.projects.find(project => project.id === projectId);
            if (project && project.status !== newStatus) {
                project.status = newStatus;
                this.updateListeners();
            }
        }
        addListener(listenerFunction) {
            this.listeners.push(listenerFunction);
        }
        updateListeners() {
            for (const listenerFunction of this.listeners) {
                listenerFunction(this.projects.slice());
            }
        }
    }
    ProjectState.instance = null;
    App.projectState = ProjectState.getInstance();
})(App || (App = {}));
/// <reference path="base-component.ts"/>
/// <reference path="../decorators/auto-bind-decorator.ts"/>
/// <reference path="../state/project-state.ts"/>
/// <reference path="../models/drag-and-drop-interfaces.ts"/>
// Project List Class:
var App;
(function (App) {
    class ProjectList extends App.Component {
        constructor(type) {
            super('project-list', 'app', 'beforeend');
            this.type = type;
            this.assignedProjects = [];
            this.typeName = (type ? 'finished' : 'active');
            this.element.id = `${this.typeName}-projects`;
            App.projectState.addListener((projects) => {
                const relevantProjects = projects.filter(project => project.status === this.type);
                this.assignedProjects = relevantProjects;
                this.renderProjects();
            });
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);
            this.renderContent();
            this.attach();
        }
        dragOverHandler(event) {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                const listEl = this.element.querySelector('ul');
                listEl.classList.add('droppable');
            }
        }
        dropHandler(event) {
            event.preventDefault();
            const projectId = event.dataTransfer.getData('text/plain');
            App.projectState.moveProject(projectId, this.type);
        }
        dragLeaveHandler(event) {
            const listEl = this.element.querySelector('ul');
            listEl.classList.remove('droppable');
        }
        renderProjects() {
            const listEl = document.getElementById(`${this.typeName}-projects-list`);
            listEl.innerHTML = '';
            for (const projectItem of this.assignedProjects) {
                new App.ProjectItem(this.element.querySelector('ul').id, projectItem);
            }
        }
        renderContent() {
            const listId = `${this.typeName}-projects-list`;
            this.element.querySelector('ul').id = listId;
            this.element.querySelector('h2').textContent =
                (this.typeName.toUpperCase()) + ' PROJECTS';
        }
    }
    __decorate([
        App.AutoBind
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        App.AutoBind
    ], ProjectList.prototype, "dropHandler", null);
    __decorate([
        App.AutoBind
    ], ProjectList.prototype, "dragLeaveHandler", null);
    App.ProjectList = ProjectList;
})(App || (App = {}));
// Validate Function:
var App;
(function (App) {
    function validate(validatableInput) {
        let isValid = true;
        if (validatableInput.required) {
            isValid =
                isValid && validatableInput.value.toString().trim().length !== 0;
        }
        if (validatableInput.minLength != null &&
            typeof validatableInput.value === 'string') {
            isValid =
                isValid && validatableInput.value.length >= validatableInput.minLength;
        }
        if (validatableInput.maxLength != null &&
            typeof validatableInput.value === 'string') {
            isValid =
                isValid && validatableInput.value.length <= validatableInput.maxLength;
        }
        if (validatableInput.min != null &&
            typeof validatableInput.value === 'number') {
            isValid =
                isValid && validatableInput.value >= validatableInput.min;
        }
        if (validatableInput.max != null &&
            typeof validatableInput.value === 'number') {
            isValid =
                isValid && validatableInput.value <= validatableInput.max;
        }
        return isValid;
    }
    App.validate = validate;
})(App || (App = {}));
/// <reference path="base-component.ts"/>
/// <reference path="../state/project-state.ts"/>
/// <reference path="../decorators/auto-bind-decorator.ts"/>
/// <reference path="../utils/validate.ts"/>
// Project Input Class:
var App;
(function (App) {
    class ProjectInput extends App.Component {
        constructor() {
            super('project-input', 'app', 'afterbegin', 'user-input');
            this.titleInputElement = this.element.querySelector('#title');
            this.descriptionInputElement = this.element.querySelector('#description');
            this.peopleInputElement = this.element.querySelector('#people');
            this.configure();
            this.attach();
        }
        gatherUserInput() {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = this.peopleInputElement.value;
            const titleValidatable = {
                value: enteredTitle,
                required: true,
                minLength: 5,
            };
            const descriptionValidatable = {
                value: enteredDescription,
                required: true,
                minLength: 5,
            };
            const peopleValidatable = {
                value: enteredPeople,
                required: true,
                min: 1,
            };
            if (App.validate(titleValidatable) &&
                App.validate(descriptionValidatable) &&
                App.validate(peopleValidatable)) {
                return [enteredTitle, enteredDescription, +enteredPeople];
            }
            else {
                alert('Invalid input, please try again!');
                return;
            }
        }
        clearInputs() {
            this.titleInputElement.value = '';
            this.descriptionInputElement.value = '';
            this.peopleInputElement.value = '';
        }
        submitHandler(event) {
            event.preventDefault();
            const userInput = this.gatherUserInput();
            if (userInput instanceof Array) {
                const [title, description, people] = userInput;
                App.projectState.addProject(title, description, people);
                this.clearInputs();
            }
        }
        configure() {
            this.element.addEventListener('submit', this.submitHandler);
        }
    }
    __decorate([
        App.AutoBind
    ], ProjectInput.prototype, "submitHandler", null);
    App.ProjectInput = ProjectInput;
})(App || (App = {}));
// Project Type Class & Enums:
var App;
(function (App) {
    let ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
        ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
    })(ProjectStatus = App.ProjectStatus || (App.ProjectStatus = {}));
    class Project {
        constructor(id, title, description, numberOfPeople, status) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.numberOfPeople = numberOfPeople;
            this.status = status;
        }
    }
    App.Project = Project;
})(App || (App = {}));
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="models/project-model.ts" />
var App;
(function (App) {
    new App.ProjectInput();
    new App.ProjectList(App.ProjectStatus.Active);
    new App.ProjectList(App.ProjectStatus.Finished);
})(App || (App = {}));
/// <reference path="base-component.ts"/>
/// <reference path="../decorators/auto-bind-decorator.ts"/>
/// <reference path="../state/project-state.ts"/>
/// <reference path="../models/project-model.ts"/>
/// <reference path="../models/drag-and-drop-interfaces.ts"/>
// Project Item Class:
var App;
(function (App) {
    class ProjectItem extends App.Component {
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
        App.AutoBind
    ], ProjectItem.prototype, "dragStartHandler", null);
    App.ProjectItem = ProjectItem;
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map