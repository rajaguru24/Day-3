let obj1={name:"person",age:"15"};
let obj2={age:"15",name:"person"};
let str1=JSON.stringify(obj1,Object.keys(obj1))
let str2=JSON.stringify(obj2,Object.keys(obj2))

if(str1===str2)
{
    console.log("JASON objects are equal")
}
else
{
    console.log("JASON objects are not equal")
}