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

function getLength(arg: string | any[]): number {
  if (Array.isArray(arg)) {
    return arg.length;
  } else {
    return arg.length;
  }
}

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

function filterByRating(arr: { title: string; rating: number }[]): {
  title: string;
  rating: number;
}[] {
  return arr.filter((item) => {
    return item.rating >= 4;
  });
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(arr: User[]): User[] {
  return arr.filter((item) => item.isActive === true);
}

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

function getUniqueValues<X>(arr1: X[], arr2: X[]): X[] {
  let uniqueArr: X[] = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!uniqueArr.includes(arr1[i])) {
      uniqueArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!uniqueArr.includes(arr2[i])) {
      uniqueArr.push(arr2[i]);
    }
  }
  return uniqueArr;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(arr: Product[]): number {
  const totalPrice = arr.reduce((sum, item) => {
    let total = item.price * item.quantity;
    if (item.discount) {
      total = total - total * (item.discount / 100);
    }
    return sum + total;
  }, 0);

  return totalPrice;
}
