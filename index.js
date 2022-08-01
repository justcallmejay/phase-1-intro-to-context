// Your code here
function createEmployeeRecord(employee) {

    let employees = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employees
}



function createEmployeeRecords(employees) {
    return employees.map(employee => 
        createEmployeeRecord(employee)
    )

}



function createTimeInEvent(newEvent) {
    let dateCal = newEvent.split(" ")
    let [date, hour] = dateCal

    let updatedBpRecord = {
        type: "TimeIn", 
        hour: hour,
        date: date
    }

    employees.timeInEvents.push(updatedBpRecord)
    return employees
}

function createTimeOutEvent (event) {
    let dateCalc = event.split(" ")
    let [date, hour] = dateCalc

    let newEvent = {
        type: "TimeOut", 
        hour: parseInt(hour, 10),
        date
    }

    employees.timeOutEvents.push(newEvent)
    return employees
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(events => {
        events.date === date})
    const timeOut = this.timeOutEvents.find(events => events.date === date)
    return (timeOut.hour - timeIn.hour) /100
    }

function hoursWordkedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
}

function calculatePayroll (records) {
    const rec = records.map(employee => {
        allWagesFor.call(employee).reduce((currentValue, total) => currentValue + total)})

        console.log(rec)
    }

function findEmployeeByFirstName(employees, firstNameString) {
    return employees.find(employee => {
        employee.firstName === firstNameString
    })
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    })
}

// function createTimeOutEvent(event) {
    
//     [date, hour] = event.split(' ');
    
//     let newEvent = 
//     {
//         Type: "TimeOut",
//         Hour: hour,
//         Date: date
//     }
//     return this.timeInEvent.push(newEvent)
// }
// function createEmployeeRecord(first, last, job, rate) {
//     // let testEmployee = {};
//     let employee = ["Gray", "Worm", "Security", '1']
//     const employeeRecord = employee.map((person)=> {
//         hgm = person.split(',');
//         // const employeeRecordID = record.map((personAll) => {
//         return (`firstName:${hgm[0]},familyName:${hgm[1]},title:${hgm[2]},payperHour:${hgm[3]}`)
//         })
//         return employeeRecord;
//     }

//     // return employeeRecord;
//     // testEmployee.firstName = first
//     // testEmployee.familyName = last
//     // testEmployee.title = job
//     // testEmployee.payPerHour = rate

//     // console.log(testEmployee)



// let employee = ["Gray", "Worm", "Security", '1']