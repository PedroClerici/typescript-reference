import { Project, ProjectStatus } from '../models/project-model.js';
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
        const newProject = new Project(Math.random().toString(), title, description, numberOfPeople, ProjectStatus.Active);
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
export const projectState = ProjectState.getInstance();
//# sourceMappingURL=project-state.js.map