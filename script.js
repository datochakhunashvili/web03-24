// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს
//  .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.

let numbers = [11,12,13,15,16,18,20,22,23,25];
const filterNumbers = numbers. filter((item) => item %2 === 0);
console. log (filterNumbers);


// 3.დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და 
// დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.

const namesFromLowerCaseToUpperCase = ( name ) => {
  return name. toUpperCase();
}
console. log(namesFromLowerCaseToUpperCase ("andria"));


// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს
//  ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და 
//  დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ 
//  ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს 
//  დააბრუნოს კოდი.

const getCurrencySymbolFromCode = (currency) => {
  if ( currency === "USD") {
    return"$"; 
} else if (currency === "EUR") {
  return "€";  
} else if (currency === "GEL") {
  return "ლ";
} else {
  return "is not money"
}
};
console. log(getCurrencySymbolFromCode("EUR"));


// 4.  დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და
//  ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა 
//  პროცენტს შეადგენს მოგება.

const getProfit = (buyPrice, sellPrice) => {
  const profit = sellPrice - buyPrice; 
  const profitPercentage = ((profit / buyPrice) * 100).toFixed(2);
  return {profitPercentage, profit };
};
const beauty= getProfit(500.4, 700);
console. log(beauty);

// 6. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს 
// (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად
//  მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ
//   ობიექტის name === ფუნქციის მეორე პარამეტრს და 
//   დავაბრუნოთ ნაპოვნი ობიექტი.

const persons = [{
  name: "andria",
  age: 21,
},
{
  name: "nikolozi",
  age: 30,
},
{
  name: "marta",
  age: 25,
}
];

const findPerson = (persons, name) => {
  const person = persons.find((person) => person.name === name);
  console.log(person);
};
findPerson(persons,"andria");
