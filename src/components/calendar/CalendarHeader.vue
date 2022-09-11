<template>
    <div class="header">
        <div class="date-control-area">
            <CalendarButton @click="onClickButtonPrev">Prev</CalendarButton>
            <CalendarButton @click="onClickButtonNext">Next</CalendarButton>
            <CalendarButton @click="onClickButtonToday">Today</CalendarButton>
        </div>
        <div class="title-area">
            {{title}}
        </div>
        <div class="view-control-area">
            <CalendarButton :isSelected="viewMode === 'month'" @click="onClickButtonMonth">월</CalendarButton>
            <CalendarButton :isSelected="viewMode === 'week'" @click="onClickButtonWeek">주</CalendarButton>
            <CalendarButton :isSelected="viewMode === 'day'" @click="onClickButtonDay">일</CalendarButton>
            &nbsp;
            <CalendarButton @click="onClickButtonFilterWeekend">주말제외</CalendarButton>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            viewMode: String,
            currentDate: Date
        },                
        computed: {
            title() {              
                let year = this.currentDate.getFullYear()
                let month = this.currentDate.getMonth() + 1                  
                if (month < 10) {
                    month = "0" + month
                }
                return `${year}.${month}`
            }
        },
        methods: {
            onClickButtonPrev() {
                this.$emit("onClickButtonPrev")
            },
            onClickButtonNext() {
                this.$emit("onClickButtonNext")
            },
            onClickButtonToday() {
                this.$emit("onClickButtonToday")
            },
            onClickButtonMonth() {
                this.$emit("onClickButtonMonth")
            },
            onClickButtonWeek() {
                this.$emit("onClickButtonWeek")
            },
            onClickButtonDay() {
                this.$emit("onClickButtonDay")
            },
            onClickButtonFilterWeekend() {
                this.$emit("onClickButtonFilterWeekend")
            }
        }
    }
</script>
<style lang="scss" scoped>
    .header {
        display: flex;
        .date-control-area {
            display: flex;            
            justify-content: flex-start;
            width: 170px;
        }
        .title-area {
            display: flex;
            align-items: center;
            flex: 1;
            font-size: 16px;
            font-weight: 500;
        }
        .view-control-area {
            display: flex;
            flex: 1;
            justify-content: flex-end;
        }
    }
</style>