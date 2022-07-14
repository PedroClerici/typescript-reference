// Project State Management (Singleton Architecture):
namespace App {
  // Listener Type:
  type Listener = (items: Project[]) => void;

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

  export const projectState = ProjectState.getInstance();
}