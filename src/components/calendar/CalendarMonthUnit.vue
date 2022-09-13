<template>
    <div class="calendar-month-unit"
        :class="[
            unit.monthType != 'current' ? 'gray-color' : '',
            unit.no > 35 ? 'no-border-bottom' : '',
            isWeekend && unit.no % 7 === 0 ? 'no-border-right' : '',
            !isWeekend && unit.no % 7 === 6 ? 'no-border-right' : '',
        ]"
        v-if="isWeekend || (!isWeekend && unit.no % 7  !== 0 && unit.no % 7 !== 1)"
    >
        <div class="date-label">{{unit.date}}</div>
        <!-- <div class="empty-task">1</div>
        <div class="task-label">2</div>
        <div class="task-label">3</div> -->
    </div>
</template>
<script>
    export default {
        props: {
            unit: Object,
            isWeekend: Boolean,
        },
        data() {
            return {
                
            }
        },
    }
</script>
<style lang="scss" scoped>
    
    $frame-border: 1px solid #d7d7d7;
    .calendar-month-unit {
        border-right: $frame-border;
        border-bottom: $frame-border;             
        color: #000;           
    }    
    .gray-color {
        color: #d7d7d7;
    }
    .no-border-right {
        border-right: none;
    }
    .no-border-bottom {
        border-bottom: none;
    }
    .date-label {        
        font-size: 12px;        
        height: 18%;
    }
    .task-label {
        color: black;
        font-size: 12px;
        background-color: red;
        height: 18%;
        margin: 1% 0;
    }
    .empty-task {
        height: 18%;
        margin: 1% 0;
    }
</style>