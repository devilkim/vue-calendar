const MONTH_UNIT_COUNT = 42

function createISODateString(dateObject) {
    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1
    const date = dateObject.getDate()

    return `${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`    
}

function createOrderForTaskList(todayTaskList, lastDayTaskList) {    
    return todayTaskList
}

function filterTaskByCurrentDatetime(currentDatetime, taskList) {
    const currentDate = createISODateString(currentDatetime)
    const filteredTaskList = taskList.filter(task => task.startDate <= currentDate && currentDate <= task.endDate)    
    const newTaskList = JSON.parse(JSON.stringify(filteredTaskList))
    for (const task of newTaskList) {
        if (currentDate === task.startDate && currentDate === task.endDate) {
            task.status = 'single'
        } else if (currentDate === task.startDate && currentDate !== task.endDate) {
            task.status = 'start'
        } else if (currentDate !== task.startDate && currentDate === task.endDate) {
            task.status = 'end'    
        } else {
            task.status = 'ing'
        }
    }
    return newTaskList
}

function createTodayTaskList(currentDatetime, taskList, lastDayTaskList) {
    if (taskList === null) {
        return []
    }    
    const todayTaskList = filterTaskByCurrentDatetime(currentDatetime, taskList)
    if (todayTaskList.length !== 0) {
        console.log(currentDatetime, todayTaskList)
    }
    const orderedTaskList = createOrderForTaskList(todayTaskList, lastDayTaskList)    
    return orderedTaskList
}

function createMonthUnits(currentDatetime, taskList) {    
    const nextMonthDate = new Date(currentDatetime)
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1)
    
    const prevLastDate = new Date(currentDatetime.getFullYear(), currentDatetime.getMonth(), 0).getDate()    
    const currentFirstDay = new Date(currentDatetime.getFullYear(), currentDatetime.getMonth(), 1).getDay()

    let indexDatetime    
    let monthType    
    if (currentFirstDay == 0) {
        indexDatetime = new Date(currentDatetime.getFullYear(), currentDatetime.getMonth(), 1)        
        monthType = 'current'        
    } else {
        indexDatetime = new Date(currentDatetime.getFullYear(), currentDatetime.getMonth() - 1, prevLastDate - (currentFirstDay - 1))        
        monthType = 'last'
    }

    const monthUnits = []
    
    for (let i = 1; i <= MONTH_UNIT_COUNT; i++) {
        const lastDayTaskList = monthUnits.length === 0 ? [] : monthUnits[monthUnits.length - 1].taskList
        const monthUnit = {
            no: i, 
            monthType, 
            date: indexDatetime.getDate(), 
            taskList: createTodayTaskList(indexDatetime, taskList, lastDayTaskList)
        }
        monthUnits.push(monthUnit)        
        indexDatetime.setDate(indexDatetime.getDate() + 1)
        if (monthType == 'last' && indexDatetime.getDate() === 1) {            
            monthType = 'current'
        } else if (monthType == 'current' && indexDatetime.getDate() === 1) {
            monthType = 'next'
        }  
    }    
    return monthUnits
}

export {createMonthUnits}