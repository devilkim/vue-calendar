<template>
    <div class="label-area">
        <div class="label">Sun</div>
        <div class="label">Mon</div>
        <div class="label">Tue</div>
        <div class="label">Wed</div>
        <div class="label">Tue</div>
        <div class="label">Fri</div>
        <div class="label">Sat</div>
    </div>
    <div class="calendar-area">
        <CalendarMonthUnit v-for="unit in monthUnits" :unit="unit" />
    </div>
</template>
<script>
    import {createMonthUnits} from "./calendar-utils"
    export default {
        props: {
            currentDate: Date,
            isWeekend: Boolean,
        },        
        data() {
            return {
                monthUnits: []
            }
        },
        mounted() {            
            this.monthUnits = createMonthUnits(this.currentDate)
        },
        watch: {
            currentDate() {                         
                this.monthUnits = createMonthUnits(this.currentDate)
            }
        }
    }
</script>
<style lang="scss" scoped>
    $frame-border: 1px solid #d7d7d7;
    $day-label-font-size: 12px;
    $height-except-calendar: 60px;
    

    .label-area {
        display: flex;
        border: $frame-border;
        border-bottom: none;        
        box-sizing: border-box;
        background-color: #eeeeff;
        div.label {
            flex: 1;
            font-size: $day-label-font-size;
        }
    }

    .calendar-area {
        border: $frame-border;   
        border-top: none;
        display: grid;
        box-sizing: border-box;
        height: calc(100% - $height-except-calendar);
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(6, 1fr);    
    }

</style>