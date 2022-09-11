
function createMonthUnits(currentDate) {
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
    for (let i = 1; i <= 42; i++) {                
        if (monthType == 'last' && indexDate > prevLastDate) {
            indexDate = 1
            monthType = 'current'
        } else if (monthType == 'current' && indexDate > currentLastDate) {
            indexDate = 1
            monthType = 'next'
        }

        monthUnits.push({no: i, monthType, date: indexDate++,})
    }
    
    
    // console.log(prevLastDate)
    // console.log(currentLastDate)
    // console.log(currentFirstDay)
         
    
    return monthUnits
}

export {createMonthUnits}