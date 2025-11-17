# 1.TypeScript-এ Interface এবং Type–এর মধ্যে পার্থক্য কী?
TypeScript-এ Type এবং Interface দুটোই দেখতে অনেকটা একই রকম, কিন্তু কিছু গুরুত্বপূর্ণ পার্থক্য আছে যা জানলে আমাদের এই দুটি ফিচার ব্যবহার করতে অনেক সুবিধা হবে।
## 1.Defination

### Interface
interface মূলত object এর structure / shape define করতে ব্যবহৃত হয়।
মানে: কোন object এর ভিতরে কী property থাকবে, কোনটার type কী হবে  এগুলো বলে দেয়। interface বেশি ব্যবহার হয় object structure define করতে।


```bash
interface User {
  name: string;
  age: number;
}
```
### Type 
Type হলো আরও general। এটা দিয়ে object, union, intersection, function signature— প্রায় সব কিছুর type define করা যায়। type ব্যবহার হয় object + আরও advanced type operations এর জন্য।

```bash 
type User = {
  name: string;
  age: number;
};
```

## 2. Extending / Inheritance
দুটোই extend করা যায়, তবে interface এর syntax আরো পরিষ্কার এবং readable।

### Interface
```bash
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}
```

### Type
```bash
type User = {
  name: string;
};

type Admin = User & {
  role: string;
};
```
## 3. Declaration Merging (এটাই সবচেয়ে বড় পার্থক্য!)

## Interface
একই নামে একাধিকবার interface লিখলে TypeScript সেগুলো merge করে।
```bash 
interface User {
  name: string;
}

interface User {
  age: number;
}
```
এখন User এর final result:
```bash 
{
  name: string;
  age: number;
}
```
## Type 
Type কখনও merge হয় না।
```bash 
type User = {
  name: string;
};

type User = {
  age: number;
}; 
//Error — Duplicate type declaration
```
## 4. Union এবং Other Advanced Types — শুধু type দিয়েই সম্ভব 
```bash
type Status = "success" | "error" | "loading";
```
এটা interface দিয়ে করা সম্ভব না। Union, Tuple, Conditionals, Mapped types— এসব type দিয়েই হয়।

## 5. Function এবং Array Type — দুইভাবেই করা যায়, কিন্তু type বেশি readable

### Interface
```bash 
type Add = (a: number, b: number) => number;
```
### Type
Interface দিয়েও করা যায় কিন্তু Type বেশি clean.

```bash 
interface Add {
  (a: number, b: number): number;
};
```
## Summary  
#### Interface ব্যবহার করো যখন:
1.Object shape define করছো

2.Class এর সাথে কাজ করছো

3.Extending এবং merging দরকার

#### Type ব্যবহার করো যখন:
1.Union / Intersection লাগবে

2.Function type define করছো

3.Advanced type manipulation দরকার

4.Tuple, Conditional type দরকার




# 2.TypeScript-এ keyof কীওয়ার্ড: কেন ব্যবহার করবো?
TypeScript জাভাস্ক্রিপ্টের উপর একটি শক্তিশালী লেয়ার যোগ করে টাইপ সেফটি। আর এই টাইপ সেফটির একটি দারুণ ফিচার হলো keyof keyword।

অনেক নতুন ডেভেলপার TypeScript শেখার সময় keyof দেখে একটু কনফিউজ হয়। কিন্তু আসলে এটা খুবই সহজ, আর প্রফেশনাল কোডিংয়ে এটা খুবই গুরুত্বপূর্ণ।

আজকের ব্লগে আমরা দেখবো—

 1.keyof কী

 2.এটা কীভাবে কাজ করে

 3.কেন এটা দরকার

 4.রিয়েল লাইফ উদাহরণসহ ব্যাখ্যা

 ## 1.keyof কী?
 keyof একটি TypeScript অপারেটর, যা কোনো object type-এর সবকটি key-এর নামকে একটি union type হিসেবে ফেরত দেয়।
মানে

একটা object-এর property গুলো কী কী আছে, সেটা TypeScript-কে জানিয়ে দেয়। এরপর TypeScript সেই keys গুলো চেক করতে পারে, validate করতে পারে, কোন ভুল key ব্যবহার হলে error দিতে পারে।

### উদাহরণ
ধরো, আমাদের কাছে একটি user object-এর টাইপ আছে
```bash 
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
};
```
এখন যদি আমরা লিখি:
``` bash 
type UserKeys = keyof User;
```
তাহলে UserKeys হচ্ছে:
``` bash 
// "name" | "age" | "isAdmin"

```
অর্থাৎ object-এর সব key-এর union type,
এখন TypeScript জানে যে User-এর key শুধু এগুলোই হতে পারে।
## 2.কেন এটা দরকার?
1.ভুল key ব্যবহার করা থেকে বাঁচায়

এটা না থাকলে তুমি যেকোনো ভুল property নাম ব্যবহার করতে পারতে।

2.Reusable ফাংশন বানাতে সুবিধা দেয়

অনেক সময় আমরা এমন ফাংশন বানাই যেগুলো dynamic key নিয়ে কাজ করে।

3.Object-এর property নিয়ে আরও type-safe কোড লেখা যায়।

## 3.রিয়েল লাইফ উদাহরণ: Object থেকে safe way-তে value নেওয়া
ধরো, তুমি একটি ফাংশন চাও যা object-এর যেকোনো property access করবে — তবে ভুল key দিলে error দিবে।

```bash 
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function getValue<T>(obj: T, key: keyof T) {
  return obj[key];
}

const user: User = {
  name: "Samriddha",
  age: 23,
  isAdmin: false,
};

//একদম type safe call
console.log(getValue(user, "age")); // 23

//এখন ভুল key দিলে TypeScript error দিবে:
getValue(user, "agge"); 
```
keyof T থাকার কারণে TypeScript নিশ্চিত করছে যে key অবশ্যই object-এর property হতে হবে।

## Summary
TypeScript-কে শক্তিশালী করার পিছনে অনেক ফিচারের ভূমিকা থাকলেও, keyof তাদের মধ্যে অন্যতম। তুমি যত বেশি বড় প্রোজেক্টে কাজ করবে, তত বেশি বুঝবে keyof কতটা দরকারি।
