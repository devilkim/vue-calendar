<template>
    <div class="expand-area">
        <div class="head">
            <div class="title">
                2020.12.02
            </div>
            <div class="close">
                Χ
            </div>
        </div>
        <div class="body">
            <div>프로세스 명 1</div>
            <div>프로세스 명 2</div>
            <div>프로세스 명 3</div>
            <div>프로세스 명 4</div>
            <div>프로세스 명 5</div>
            <div>프로세스 명 6</div>
            <div>프로세스 명 8</div>
            <div>프로세스 명 9</div>
            <div>프로세스 명 10</div>
            <div>프로세스 명 11</div>
            <div>프로세스 명 12</div>
            <div>프로세스 명 13</div>
        </div>
    </div>
</template>
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
                background-color: red;
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