const MONTH_UNIT_COUNT = 42

function createMonthUnits(currentDate, taskList) {
    const nextMonthDate = new Date(currentDate)
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1)
    
    const prevLastDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()
    const currentLastDate = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), 0).getDate()
    const currentFirstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

    let indexDate
    let monthType
    if (currentFirstDay == 0) {
        indexDate = 1
        monthType = 'current'
    } else {
        indexDate = prevLastDate - (currentFirstDay - 1)
        monthType = 'last'
    }

    const monthUnits = []
    const indexDatetime = new Date(
        

        )
    for (let i = 1; i <= MONTH_UNIT_COUNT; i++) {                
        if (monthType == 'last' && indexDate > prevLastDate) {
            indexDate = 1
            monthType = 'current'
        } else if (monthType == 'current' && indexDate > currentLastDate) {
            indexDate = 1
            monthType = 'next'
        }
        monthUnits.push({
            no: i, 
            monthType, 
            date: indexDate++, 
        })
    }    
    return monthUnits
}

export {createMonthUnits}