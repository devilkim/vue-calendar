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
        <CalendarMonthUnitExpand v-show="unit.no === 6" />
        <div class="date-label">{{unit.date}}</div>
        <div class="task-area" v-for="(task, index) in unit.taskList">
            <div        
                v-if="index < 3"        
                :class="[
                        task.status === 'empty' ? 'empty-task' : 'task',
                        task.status,
                        index % 3 === 0 ? 'color1' : '',
                        index % 3 === 1 ? 'color2' : '',
                        index % 3 === 2 ? 'color3' : '',
                    ]"
                @click="onClickButtonTask($event, task)"
            >
                <span v-if="task.status === 'start' || task.status === 'single' || (isWeekend && unit.no % 7 === 1) || (!isWeekend && unit.no % 7 === 2)">
                    {{task.name}}
                </span>
            </div>
            <div 
                class="more-area"            
                v-else-if="index === 3">                
                <span>+ {{unit.taskList.length - 3}}개</span>
            </div>            
        </div>        
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
        methods: {
            onClickButtonTask: function(e, task) {
                console.log(e, task)

            }
        }
    }
</script>
<style lang="scss" scoped>
    $frame-border: 1px solid #d7d7d7;
    $task-border-radius: 4px;
    .calendar-month-unit {
        padding: 0;
        border-right: $frame-border;
        border-bottom: $frame-border;
        color: #000;        
        position: relative;

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
    .more-area {        
        font-size: 12px;
        cursor: pointer;
    }    
    
    .date-label {
        margin-top: 4px;
        margin-left: 4px;
        font-size: 12px;                
        height: 16%;
    }
    .task-area {
        height: 18%;
        margin: 1% 0;
    }
    .empty-task {
        height: 18%;
        margin: 1% 0;
    }
    .task {
        color: black;
        font-size: 12px;        
        height: 100%;        
        display: flex;
        align-items: center;
        padding-left: 4px;
        cursor: pointer;
        box-sizing: border-box;
    }

    .start {        
        width: 101%;
        border-radius: $task-border-radius 0 0 $task-border-radius;
    }
    .ing {
        width: 101%;
    }
    .end {
        margin-right: 2px;
        border-radius: 0 $task-border-radius $task-border-radius 0;
    }
    .single {
        margin: 0 2px;
        border-radius: $task-border-radius;
    }

    .color1 {
        background-color: #f8ac59;
        color: #ffffff;
    }

    .color2 {
        background-color: #1ab394;
        color: #ffffff;
    }

    .color3 {
        background-color: #707070;
        color: #ffffff;
    }
</style>