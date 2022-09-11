<template>
    <div class="calendar-month-unit"
        :class="[
            unit.monthType != 'current' ? 'gray-color' : '',
            unit.no > 35 ? 'no-border-bottom' : '',
            unit.no % 7 === 0 ? 'no-border-right' : '',
        ]"
    >
        {{unit.date}}
    </div>
</template>
<script>
    export default {
        props: {
            unit: Object,
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
</style>