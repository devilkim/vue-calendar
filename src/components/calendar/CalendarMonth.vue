<template>
    <div class="label-area">
        <div class="label" v-if="isWeekend">Sun</div>
        <div class="label">Mon</div>
        <div class="label">Tue</div>
        <div class="label">Wed</div>
        <div class="label">Tue</div>
        <div class="label">Fri</div>
        <div class="label" v-if="isWeekend">Sat</div>
    </div>
    <div 
        :class="[
            isWeekend ? 'calendar-area-weekend' : 'calendar-area-no-weekend'
        ]"
    >
        <CalendarMonthUnit v-for="unit in monthUnits" :unit="unit" :isWeekend="isWeekend"  />
    </div>
</template>
<script>
    import {createMonthUnits} from "./calendar-utils"
    export default {
        props: {
            currentDate: Date,
            isWeekend: Boolean,
            taskList: Array,
        },        
        data() {
            return {
                monthUnits: [],             
            }
        },
        mounted() {            
            this.monthUnits = createMonthUnits(this.currentDate, this.taskList)            
        },
        watch: {
            currentDate() {                         
                this.monthUnits = createMonthUnits(this.currentDate, this.taskList)                
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
            color: #000;
        }
    }
    .calendar-area {
        border: $frame-border;   
        border-top: none;
        display: grid;
        box-sizing: border-box;
        height: calc(100% - $height-except-calendar);
    }
    .calendar-area-weekend {
        @extend .calendar-area;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }

    .calendar-area-no-weekend {
        @extend .calendar-area;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }

</style>