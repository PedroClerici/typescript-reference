import { ProjectStatus } from './models/project-model';
import { ProjectInput } from './components/project-input'
import { ProjectList } from './components/project-list'

new ProjectInput();
new ProjectList(ProjectStatus.Active);
new ProjectList(ProjectStatus.Finished);
