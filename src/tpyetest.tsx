
function hello(name:string , age? :number) : string{ 

    if(age !== undefined){ 

        return `Hello ${name} + your age is ${age}`
    } else {
        return `Hello ${name}`
    }
}


function add (...nums : number[]){
    return nums.reduce((result,num)=> result+num ,0);
}


interface User{
    name : string;
}

const Sam : User = {
    name: 'sam'
}

function showName (){
    console.log(this.name);
}

const a =  showName.bind(Sam);

type Job ="police" | "developer" | "teacher";
interface User2 {
    name: string,
    job : Job;
}

const user : User2 = {
    name : 'tom',
    job : 'developer'
}

interface Car { 
    name : 'car',
    color : string,
    start() :void
}

interface Mobile { 
    name : 'mobile',
    color : String,
    call() : void;
}


function getGift (gift :Car | Mobile){ 
    if(gift.name =='car'){
        gift.start()
    } else {
        gift.call();
    }
} 


class Car2 { 

    // 멤버변수는 생성자  이전에 선언 
    color:string;
    constructor(color:string){
        this.color = color;
    }
    start(){
        console.log("start");
    }
}

const bmw =  new Car2('red'); 


// 어떤 형태의 배열이 들어올지 모르는데 그때마다 유니온 할 수는 
// 없을 때 그 때 제네릭 사용
function getSize(arr : string[] | number[]) : number {
    return arr.length;
} 

// 제네릭 사용
function getSize2<T>(arr: T[]) : number { 
    return arr.length;
}

const arr1 = [1,23,2];
getSize(arr1);

const arr2 = ['참','좋']
getSize(arr2);

const arr3 = [1,2,3,4];     // 보내는 쪽에서 형태를 결정
getSize2<number>(arr3);

const arr4 = ['보','라'];
getSize2<string>(arr4);

interface Mobile2 <T> {
    name : string;
    price : number;
    option : T;
}


// interface의 option을 제네릭으로 해서 보내는 쪽에서 형태 결정
const m1: Mobile2<object> = {
    name: 's21',
    price :1000,
    option : {
        color : "red",
        coupon : false
    }
}

const m2 : Mobile2<string> = {
    name : 's22',
    price : 4000,
    option : 'good'

}

// Record <K,T>
interface User3 {
    id : number;
    name : string;
    age : number;
}

function isValid (user: User3) { 
    const result: Record <keyof User3, boolean> = {
        id : user.id >0,
        name : user.name !=="",
        age : user.age > 20 
    }
    return result;
}

//Pick <T,K> User3 인터페이스에서 사용할 키만 뽑아서
// Omit <T,K> omit은 특정 키만 제외하고 사용
const admin : Pick<User3, 'id'| 'name'> = {   
    id : 0,
    name :"Bob"
}

type T1 = string | number | boolean;
type T2 = Exclude<T1, number|string>; // T2는 T1에서 number, string 제외한 키값 사용 