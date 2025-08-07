console.log("Date Object");

//current date and time

const now = new Date();
console.log(now);

const myBirth = new Date(2003-1-7);
console.log(myBirth);

const genDate = new Date(1049999999999);
console.log(genDate);

const thisYear =now.getFullYear();
const thisMonth = now.getMonth();
const thisDay = now.getDate();
const thisDayInWeek = now.getDay();
const thisHour = now.getHours();
const thisMinute = now.getMinutes();
const thisSecond = now.getSeconds();
const thisTime = now.getTime();

console.log(thisYear);
console.log(thisMonth);
console.log(thisDay);
console.log(thisDayInWeek);
console.log(thisHour);
console.log(thisMinute);
console.log(thisSecond);
console.log(thisTime);

console.log(`${thisDay} this day`);

const newDate = new Date();
newDate.setFullYear(2003);
newDate.setMonth(0);
newDate.setDate(7);
newDate.setHours(4);
newDate.setMinutes(47);
newDate.setSeconds(0);

console.log(newDate);



