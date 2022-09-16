<template>
    <div class="frame">
        <CalendarHeader  
            :currentDate="currentDate"
            :viewMode="viewMode"
            @onClickButtonPrev="onClickButtonPrev"
            @onClickButtonNext="onClickButtonNext"
            @onClickButtonToday="onClickButtonToday"
            @onClickButtonMonth="onClickButtonMonth"
            @onClickButtonWeek="onClickButtonWeek"
            @onClickButtonDay="onClickButtonDay"
            @onClickButtonFilterWeekend="onClickButtonFilterWeekend"
        />
        <CalendarMonth 
            :currentDate="currentDate"
            :isWeekend="isWeekend"
            :taskList="processList"
        />
    </div>
</template>
<script>    
    export default {
        data() {
            return {
                currentDate: new Date(),
                viewMode: "month", // month, week, day
                isWeekend: true,
                processList: [
                    {id: 1, startDate: '2022-09-01', endDate: '2022-09-10', name: 'A'},
                    {id: 2, startDate: '2022-09-11', endDate: '2022-09-15', name: 'B'},
                    {id: 3, startDate: '2022-09-16', endDate: '2022-09-20', name: 'C'},
                    {id: 4, startDate: '2022-09-23', endDate: '2022-09-23', name: 'DDD'},
                    {id: 5, startDate: '2022-09-01', endDate: '2022-09-10', name: 'A1'},
                    {id: 6, startDate: '2022-09-01', endDate: '2022-09-10', name: 'A2'},
                    {id: 7, startDate: '2022-09-01', endDate: '2022-09-10', name: 'A3'},
                    {id: 8, startDate: '2022-09-01', endDate: '2022-09-10', name: 'A4'},

                ]
            }
        },
        methods: {
            onClickButtonPrev() {
                const newDate = new Date(this.currentDate)
                if (this.viewMode == "month") {                                        
                    newDate.setMonth(this.currentDate.getMonth() - 1)                    
                    this.currentDate = newDate
                }
            },
            onClickButtonNext() {
                const newDate = new Date(this.currentDate)
                if (this.viewMode == "month") {                    
                    newDate.setMonth(this.currentDate.getMonth() + 1)
                    this.currentDate = newDate
                }
            },
            onClickButtonToday() {
                const newDate = new Date()
                this.currentDate = newDate
            },
            onClickButtonMonth() {
                if (this.viewMode != "month") {
                    this.viewMode = "month"
                }                
            },
            onClickButtonWeek() {
                if (this.viewMode != "week") {
                    this.viewMode = "week"
                }                
            },
            onClickButtonDay() {
                if (this.viewMode != "day") {
                    this.viewMode = "day"
                }                
            },
            onClickButtonFilterWeekend() {                
                if (this.viewMode != "day") {
                    this.isWeekend = !this.isWeekend
                }                
            }
        }
    }
</script>
<style lang="scss" scoped>  
    .frame {        
        width: 100%;
        height: 100%;    
        padding: 10px;
        margin: 0;
        box-sizing: border-box;
    }  
</style>