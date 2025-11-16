// Problem Number - 1
function formatValue(
  arg: number | string | boolean
): number | string | boolean {
  if (typeof arg === "string") {
    return arg.toUpperCase();
  } else if (typeof arg === "number") {
    return arg * 10;
  } else {
    return !arg;
  }
}

//Problem Number - 2
function getLength(arg: string | any[]): number {
  return arg.length;
}

// Problem Number - 3
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age:${this.age}`;
  }
}

// Problem Number - 4
interface Book {
  title: string;
  rating: number;
}

function filterByRating(arr : Book[]) : Book[] {
    return arr.filter((item) => {
        return item.rating >= 4;
    });
}



