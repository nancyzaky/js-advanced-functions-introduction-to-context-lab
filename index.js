// Your code here
const createEmployeeRecord = ([firstName, lastName, title, rate]) => {
let person = {};
person.firstName = firstName;
//console.log(firstName);
person.familyName = lastName;
person.title = title;
person.payPerHour = rate;
person.timeInEvents = [];
person.timeOutEvents = []

//console.log(person)
return person;
}

let createEmployeeRecords = (arrOfArr) => {
  const newArr = [];
 for (let i of arrOfArr) {
   let args = i;
   //console.log(args)
   let result = createEmployeeRecord(args);
   //console.log(result)
   newArr.push(result);
 }

 return newArr;
}

createEmployeeRecords([
        ["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]
      ])
createEmployeeRecord(['nancy', 'zaky', 'software engineer', 40])
createEmployeeRecord(["Gray", "Worm", "Security", 1]);

const createTimeInEvent = (obj , timeStamp) => {

  let newObj = {}
  let newArr= timeStamp.split(' ');

  newObj.type= "TimeIn";
  newObj.hour = parseInt(newArr[1])
  newObj.date = newArr[0];
  obj.timeInEvents.push(newObj);
  //console.log(obj)

 return obj;
}
const createTimeOutEvent = (obj, timeStamp) => {
  let newObj = {}
  let newArr= timeStamp.split(' ');

  newObj.type= "TimeOut";
  newObj.hour = parseInt(newArr[1])
  newObj.date = newArr[0];
  obj.timeOutEvents.push(newObj);
  //console.log(obj)



 return obj;
}

// createTimeInEvent({firstName: "moe", familyName: "sizlak", title: "barkeep", payPerHour: 2, timeInEvents: Array(0)}, "2014-02-28 1400")

const hoursWorkedOnDate = (obj, date ) => {
    let inResult, outResult
for (let key of obj.timeInEvents) {
    if (key.date === date) {
        let hour = key.hour;
        let hourArr = hour.toString().split('');
        if (Number(hourArr[1]) > 0) {
             inResult = parseInt(hourArr[0]+ hourArr[1])

        } else {
             inResult = parseInt(hourArr[0]);
        }

        for (let x of obj.timeOutEvents) {
            if(x.date === date) {
                let hourOut = x.hour;
                let hourOutArr = hourOut.toString().split('');
                if (Number(hourOutArr[1]) > 0) {
                     outResult = parseInt(hourOutArr[0]+ hourOutArr[1])

                   } else {
                     outResult = parseInt(hourOutArr[0]);
        }

            }
        }

    }
}
let finalResult = outResult - inResult
return finalResult;

}




const wagesEarnedOnDate = (obj , date) => {
  let result = hoursWorkedOnDate(obj, date);
  //console.log(result);
  let wagesEarned = result * (obj.payPerHour);
  //console.log(wagesEarned);
  return wagesEarned;
}



const allWagesFor = (obj) => {
  var tot = 0
  for ( var key of obj.timeInEvents) {
    let dateWage = key.date;
    let wageResult = wagesEarnedOnDate(obj, dateWage);
    tot += wageResult;
  }
  console.log(tot);
  return tot;
}

const findEmployeeByFirstName = (arrayOfObjs, name) => {
  for (var obj of arrayOfObjs) {
    if (obj.firstName === name) {
      return obj
    } else {
      return undefined
    }
  }
}

const calculatePayroll = (arrayOfObjs) => {
  var sum = 0;
  for (let obj of arrayOfObjs) {
    let wageSum = allWagesFor(obj);
    sum+=wageSum
  }
  console.log(sum)

  return sum
}











const obj1 = {
  firstName: 'Julius',
  familyName: 'Caesar',
  title: 'General',
  payPerHour: 27,
  timeInEvents: [  { type: 'TimeIn', hour: 1400, date: '2018-01-01' },
    { type: 'TimeIn', hour: 1400, date: '2018-01-02' },
    { type: 'TimeIn', hour: 1400, date: '2018-01-03' } ],
  timeOutEvents: [  { type: 'TimeOut', hour: 1600, date: '2018-01-01' },
    { type: 'TimeOut', hour: 1600, date: '2018-01-02' },
    { type: 'TimeOut', hour: 1600, date: '2018-01-03' }]
}
// hoursWorkedOnDate(obj1,'2018-01-01' )
// wagesEarnedOnDate(obj1,'2018-01-01');
//allWagesFor(obj1);



// const wagesEarnedOnDate = (obj, date) => {
//  let result= hoursWorkedOnDate(obj, date)
//  if (result) {
//    let wage = obj.payPerHour * result
//    console.log(wage);
//  }
//  return wage
// }
// wagesEarnedOnDate(obj1, '0044-03-15', hoursWorkedOnDate)

// createTimeOutEvent(obj1, '0044-03-15')
const csvDataEmployees = [
        ["Thor", "Odinsson", "Electrical Engineer", 45],
        ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
        ["Natalia", "Romanov", "CEO", 150],
        ["Darcey", "Lewis", "Intern", 15],
        ["Jarvis", "Stark", "CIO", 125],
        ["Anthony", "Stark", "Angel Investor", 300]
      ]

      const csvTimesIn = [
        ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
        ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
        ["Natalia", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1300"]],
        ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
        ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
        ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
      ]

      const csvTimesOut = [
        ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Natalia", ["2018-01-01 2300", "2018-01-02 2300", "2018-01-03 2300"]],
        ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
        ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
        ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
      ]

let employeeRecords = createEmployeeRecords(csvDataEmployees)
employeeRecords.forEach(function (rec) {
  let timesInRecordRow = csvTimesIn.find(function (row) {
    return rec.firstName === row[0]
  })

  let timesOutRecordRow = csvTimesOut.find(function (row) {
    return rec.firstName === row[0]
  })

  timesInRecordRow[1].forEach(function(timeInStamp){
    createTimeInEvent(rec, timeInStamp)
  })

  timesOutRecordRow[1].forEach(function(timeOutStamp){
    createTimeOutEvent(rec, timeOutStamp)
  })
})
console.log(employeeRecords);
debugger;
calculatePayroll(employeeRecords)
allWagesFor(obj1);