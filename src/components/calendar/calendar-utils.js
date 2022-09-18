const MONTH_UNIT_COUNT = 42
const COLOR_LIST = ['#f8ac59', '#1ab394', '#707070']

function createISODateString(dateObject) {
    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1
    const date = dateObject.getDate()
    return `${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`    
}

function createTaskColor(taskList) {
    for (let i = 0; i < taskList.length; i++) {
        taskList[i].color = COLOR_LIST[i % COLOR_LIST.length]
    }
}
function createOrderForTaskList(todayTaskList, lastDayTaskList) {        
    // return todayTaskList // 순서 생성 없이 반환 시
    if (todayTaskList.length === 0) {
        return []
    }

    const orderedTaskList = []
    for (let i = 0; i < lastDayTaskList.length; i++) {
        const lastDayTask = lastDayTaskList[i]
        const todayTask = todayTaskList.filter(item => item.id === lastDayTask.id)[0]
        const isExists = todayTask === undefined
        if (isExists) {
            continue
        }
        // console.log(orderedTaskList.length, i, lastDayTask)
        if (orderedTaskList.length === i) {
            orderedTaskList.push(todayTask)
        } else if (orderedTaskList.length < i) {            
            const emptyTaskCount = i - orderedTaskList.length
            for (let j = 0; j < emptyTaskCount; j++) {                
                orderedTaskList.push({status: 'empty'})            
            }
            orderedTaskList.push(todayTask)
        } else {
            throw new Error('발생할 수 없는 로직')
        }
    }    
    for (let i = 0; i < todayTaskList.length; i++) {
        const todayTask = todayTaskList[i]
        const isExists = orderedTaskList.filter(item => item.id === todayTask.id).length !== 0
        if (isExists) {
            continue
        }
        let isAdd = false
        for (let j = 0; j < orderedTaskList.length; j++) {
            if (orderedTaskList[j].status === 'empty') {
                orderedTaskList[j] = todayTask
                isAdd = true
                break
            }
        }
        if (!isAdd) {
            orderedTaskList.push(todayTask)
        }        
    }        
    return orderedTaskList
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
    const orderedTaskList = createOrderForTaskList(todayTaskList, lastDayTaskList)    
    return orderedTaskList
}

function createMonthUnits(currentDatetime, taskList) {                
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

    createTaskColor(taskList)

    const monthUnits = []    
    for (let i = 1; i <= MONTH_UNIT_COUNT; i++) {
        const lastDayTaskList = monthUnits.length === 0 ? [] : monthUnits[monthUnits.length - 1].taskList
        const monthUnit = {
            no: i, 
            monthType, 
            date: indexDatetime.getDate(), 
            fulldate: createISODateString(indexDatetime),
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