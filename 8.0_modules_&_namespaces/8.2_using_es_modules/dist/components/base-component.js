// Component Base Class:
export default class Component {
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
//# sourceMappingURL=base-component.js.map