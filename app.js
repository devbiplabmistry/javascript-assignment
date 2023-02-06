
//  Problem 1. Lets play mind game

// Description : This mindGame() function is a function where
//         you put a positive number as a parameter then  it calculate
//         some mathematical operation i.e multiplicatin bt 3 then addition 
//         by 10 after that divided by 2 and finally substration by 5 and we get final result.
// 

function mindGame(positiveNumber){
    if(typeof(positiveNumber) == 'string'){
        return 'you select an invalid one ,please check your number';
    }
    else{
        let firstStep =positiveNumber*3;
        let secondStep=firstStep+10;
        let thirdStep=secondStep/2;
        let finalStep=thirdStep-5;
        return finalStep;
    }
  
}
// let finalResult =mindGame(33);
// console.log(finalResult);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Problem-2 : Finding Even or Odd

// Description :evenOdd() function is a function which is check if a input parameter is a string
//   and check how many charecter it is and if its length is even the its return even and if its 
//   length is odd then it return odd as a message.
 
function evenOdd(stringInput){
    if(typeof(stringInput) == 'number'){
        return 'you select an invalid one ,please check your Input';
    }
    else {
        if(stringInput.length % 2 == 0){
            return 'even'
        }
        else{
            return 'odd'
        }
    }
}
// let evenOddFind=evenOdd('chatgpt');
// console.log(evenOddFind);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// problem -3 :Is less or Grater than 7
// Description : isLGSeven() function calculate the difference between the input number and 7
//   then the calculated result compair with 7 if it is less than 7 then it show the calculated 
//   result but if the calculated result is grater than 7 then it show the double of the input 
//    number.
function isLGSeven(number){
    if(typeof(number) == 'string'){
        return 'you select an invalid one ,please check your Input';
    }
    else{
        if ((number -7) < 7){
            return number -7;
         }
         else{
            return 2*number
         }
    }
}

// let lgSeven=isLGSeven(6)
// console.log(lgSeven);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// problem -3 :Finding bad data.
// Description : findingBadData() function help us to findout how many negative number exist
//  in an arry . it calculate every  negative data and show us the total  result
// (how many negative value present).

// let dummyArry=[2,-5,-7,-13];
function findingBadData(numberArry){
    if(typeof(numberArry) == 'string' || typeof(numberArry) == 'number') {
        return 'you select an invalid one ,please check your Input';
    }
    else{
        let count=0
        for (let i = 0; i < numberArry.length; i++) {
            const element = numberArry[i];
            if(element <= 0){ 
                count++;
            }
        }
        return count;
    }   
}
// let finalResult=findingBadData(dummyArry);
// console.log(finalResult);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Problem-5 :Convert your gems into Diamond.

// Description :gemsToDiamond() function can help us to convert gems to diamond ,and 
// it help us to calculate total number of diamonds, also find out how many diamond we get if
// the total number of diamond is grater than double of 1000 at this condition it can help to 
// calculate  difference of total diamond and 2000 and we get our expected results.

function gemsToDiamond(num1,num2,num3){
    if(typeof(num1) == 'string' || typeof(num2) == 'string' || typeof(num3) == 'string') {
        return 'you select an invalid one ,please check your Input';
    }
    else{
        let firstFriendPower=21;
        let secondFriendPower=32;
        let thirdFriendPower=43;
        let totalDiamond =num1*firstFriendPower+num2*secondFriendPower+num3*thirdFriendPower;
        if(totalDiamond >2*1000){
            return totalDiamond -2000;
        }
        else{
            return totalDiamond;
        }
    }
}
//  let results= gemsToDiamond(100,5,'biplab');
//  console.log(results);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++