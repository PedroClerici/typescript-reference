/// <reference path="base-component.ts"/>
/// <reference path="../state/project-state.ts"/>
/// <reference path="../decorators/auto-bind-decorator.ts"/>
/// <reference path="../utils/validate.ts"/>

// Project Input Class:
namespace App {
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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
}