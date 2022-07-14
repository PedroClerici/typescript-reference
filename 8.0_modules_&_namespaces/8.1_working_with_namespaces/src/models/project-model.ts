// Project Type Class & Enums:
namespace App {
  export enum ProjectStatus { Active, Finished }
  
  export class Project {
    constructor (
      public id: string,
      public title: string,
      public description: string,
      public numberOfPeople: number,
      public status: ProjectStatus
    ) {}
  }
}