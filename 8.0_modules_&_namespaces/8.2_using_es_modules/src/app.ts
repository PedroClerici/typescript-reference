import { ProjectStatus } from './models/project-model.js';
import { ProjectInput } from './components/project-input.js'
import { ProjectList } from './components/project-list.js'

namespace App {
  new ProjectInput();
  new ProjectList(ProjectStatus.Active);
  new ProjectList(ProjectStatus.Finished);
}
