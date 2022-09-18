<template>
    <div class="expand-area">
        <div class="head">
            <div class="title">
                {{title}}
            </div>
            <div class="close" @click="onClickClose">
                Χ
            </div>
        </div>
        <div class="body">
            <div v-for="task in filteredTaskList" :style="{backgroundColor: task.color}">{{task.name}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            currentDate: String,            
            taskList: Array,
        },
        computed: {
            title() {
                return this.currentDate.replace(/-/gi, '.')
            },
            filteredTaskList() {
                return this.taskList.filter(item => item.status !== 'empty')
            },
        },
        methods: {
            onClickClose: function() {
                
            }
        }
    }  
</script>
<style lang="scss" scoped>
    $frame-border: 1px solid #d7d7d7;
    .expand-area {
        background-color: #ffffff;
        border: $frame-border;
        position: absolute;
        z-index: 10;
        box-sizing: border-box;
        width: 100%;   
        min-height: 10px;
        .head {
            background-color: #d7d7d7;
            display: flex;
        }
        .title {
            flex: 1;
            font-size: 12px;
        }
        .close {
            width: 10px;
            font-size: 10px;

        }
        .body {
            padding: 2px;
            div {
                font-size: 12px;
                color: #ffffff;                
                margin: 2px;
                padding: 0 2px;
                border-radius: 4px;
                height: 18px;
                display: flex;
                align-items: center;
            }
        }
    }    
</style>