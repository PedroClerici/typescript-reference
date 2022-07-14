// Component Base Class:
namespace App {
  export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
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
}