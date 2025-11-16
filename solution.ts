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
function filterByRating(arr: { title: string; rating: number }[]): {
  title: string;
  rating: number;
}[] {
  return arr.filter((item) => {
    return item.rating >= 4;
  });
}

// Problem Number - 5
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(arr: User[]): User[] {
  return arr.filter((item) => item.isActive === true);
}

// problem Number -  6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book) {
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available:${book.isAvailable ? "Yes" : "No"}
`);
}