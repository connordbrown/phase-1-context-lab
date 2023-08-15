/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeArr) {
    return {
            firstName: employeeArr[0],
            familyName: employeeArr[1],
            title: employeeArr[2],
            payPerHour: employeeArr[3],
            timeInEvents: [],
            timeOutEvents: []
           }
}

function createEmployeeRecords(employeesArr) {
    return employeesArr.map(employeeArr => createEmployeeRecord(employeeArr))
}

function createTimeInEvent(dateTime) {
    this.timeInEvents.push({
                            type: "TimeIn",
                            date: dateTime.slice(0, 10),
                            hour: parseInt(dateTime.slice(11))
                            });
    return this;
}

function createTimeOutEvent(dateTime) {
    this.timeOutEvents.push({
                             type: "TimeOut",
                             date: dateTime.slice(0, 10),
                             hour: parseInt(dateTime.slice(11))
                            });
    return this;
}

function hoursWorkedOnDate(workDate) {
    const timeOut = this.timeOutEvents.find((element) => element.date === workDate).hour;
    const timeIn = this.timeInEvents.find((element) => element.date === workDate).hour;

    return (timeOut - timeIn)/100;
}

function wagesEarnedOnDate(workDate) {
    return this.payPerHour * hoursWorkedOnDate.call(this, workDate);
}

function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find((employee) => employee.firstName === firstNameString);
}

function calculatePayroll(employees) {
    const wages = employees.map((employee) => allWagesFor.call(employee)); // employee is context
    const payroll = wages.reduce((total, wage) => {
        total += wage;
        return total;
    }, 0);
    return payroll;
}


