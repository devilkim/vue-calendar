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
                    {id: 1, startDate: '2022-08-05', endDate: '2022-08-31', name: 'first'},
                    {id: 9, startDate: '2022-10-07', endDate: '2022-10-17', name: 'end'},

                    {id: 11, startDate: '2022-09-05', endDate: '2022-09-07', name: 'A'},
                    {id: 12, startDate: '2022-09-04', endDate: '2022-09-06', name: 'B'},
                    {id: 13, startDate: '2022-09-06', endDate: '2022-09-08', name: 'C'},

                    {id: 21, startDate: '2022-09-11', endDate: '2022-09-12', name: 'A'},
                    {id: 22, startDate: '2022-09-12', endDate: '2022-09-13', name: 'B'},
                    {id: 23, startDate: '2022-09-13', endDate: '2022-09-14', name: 'C'},
                    {id: 24, startDate: '2022-09-13', endDate: '2022-09-14', name: 'D'},
                    {id: 25, startDate: '2022-09-14', endDate: '2022-09-15', name: 'E'},
                    {id: 26, startDate: '2022-09-15', endDate: '2022-09-16', name: 'F'},

                    {id: 31, startDate: '2022-09-18', endDate: '2022-09-21', name: 'A'},
                    {id: 32, startDate: '2022-09-19', endDate: '2022-09-22', name: 'B'},
                    {id: 33, startDate: '2022-09-20', endDate: '2022-09-23', name: 'C'},
                    {id: 34, startDate: '2022-09-21', endDate: '2022-09-25', name: 'D'},

                    {id: 41, startDate: '2022-09-25', endDate: '2022-09-26', name: '동해물과 백두산이 마르고 닳도록 하느님이'},
                    {id: 42, startDate: '2022-09-27', endDate: '2022-09-28', name: 'B'},                    
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