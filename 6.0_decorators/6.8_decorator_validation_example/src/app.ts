interface ValidatorConfig {
  [property: string]: {
    [validateProperty: string]: string[]  // ['required', 'positive', ...]
  }
}

const registeredValidator: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
  registeredValidator[target.constructor.name] = {
    ...registeredValidator[target.constructor.name],
    [propertyName]: ['required'],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidator[target.constructor.name] = {
    ...registeredValidator[target.constructor.name],
    [propertyName]: ['positive'],
  };
}

function validate(object: any) {
  const objectValidatorConfig = registeredValidator[object.constructor.name];
  if (!objectValidatorConfig) {
    return true;
  }

  let isValid = true;
  for (const property in objectValidatorConfig) {
    for (const validator of objectValidatorConfig[property]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!object[property];
          break;
        case 'positive':
          isValid = isValid && object[property] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleNode = <HTMLInputElement>document.getElementById('title');
  const priceNode = <HTMLInputElement>document.getElementById('price');

  const title = titleNode.value;
  const price = +priceNode.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again...');
    return;
  } else {
    console.log(createdCourse);
  }

})