<template>  
  <div style="width:800px; height: 1000px; background-color: white;" >
    <Calendar />
  </div>
  
  <!-- <div class='page'>
    <div class='header flex'>      
      <div class='left'>
        <el-icon><LocationFilled /></el-icon>      
        &nbsp;
        <el-select v-model='value' class='m-2' placeholder='Select'>
          <el-option
            v-for='item in options'
            :key='item.value'
            :label='item.label'
            :value='item.value'
          />
        </el-select>
        &nbsp;
        >         
        Home
      </div>
      <div class='right'>
        <el-switch size='small' v-model="value1" />
        &nbsp;
        <span>내 정보만 보기</span>
      </div>      
    </div>
    <div class='process'>
      <div class='calendar'>
        <Calendar />
      </div>
      <div class='statics'>
        <div class='progress'>11</div>
        <div class='delay'>22</div>
      </div>
    </div>
    <div class='build'>
      <div class='row'>
        Title
      </div>
      <div class='row'>
        Build Name
      </div>
      <table>
        <colgroup>
          <col width='150px' />
          <col width='*' />
          <col width='100px' />
          <col width='100px' />
          <col width='120px' />
          <col width='100px' />
          <col width='160px' />
          <col width='120px' />
          <col width='160px' />
        </colgroup>
        <thead>
          <tr>
            <th>lable1</th>
            <th>label2</th>
            <th>label3</th>
            <th>label4</th>
            <th>label5</th>
            <th>label6</th>
            <th>label7</th>
            <th>label8</th>
            <th>label9</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>lable1</td>
            <td>label2</td>
            <td>label3</td>
            <td>label4</td>
            <td>label5</td>
            <td>label6</td>
            <td>label7</td>
            <td>label8</td>
            <td>label9</td>
          </tr>
        </tbody>
      </table>
      <div class='row'>
        pagination
      </div>
    </div>
  </div>   -->
</template>

<style lang='scss' scoped>
  // size
  $page-width: 1280px;  
  $statics-width: 300px;
  $statics-height: 300px;
  $font-size: 14px;  
  
  $panel-space: 16px;
  $panel-border: 1px solid #d7d7d7;
  $panel-background-color: white;

  $row-vertical-padding: 16px;
  $row-horizontal-padding: 24px;
  $row-border: 1px solid #e7e7e7;
  $row-padding: $row-vertical-padding $row-horizontal-padding;

  .flex {
    display: flex;    
    .left {
      flex: 1;
      display: flex;    
      align-items: center;
      justify-content: flex-start;
    }
    .right {
      flex: 1;
      display: flex;    
      align-items: center;
      justify-content: flex-end;
    }
  }
  .panel {        
    background-color: $panel-background-color;
    border: $panel-border;
    box-sizing: border-box;
  }
  .row {
    display: flex;
    padding: $row-padding;
    border-bottom: $row-border;
    box-sizing: border-box;    
    width: 100%;
  }  
  .col {
    flex: 1;    
  }
  
  table {
    width: 100%;    
    border-spacing: 0;        
    thead {                  
      th {
      font-weight: normal;
      text-align: left;
      padding: $row-padding;
      padding-right: 0;
      border-bottom: $row-border;
    }
    }    
    td {      
      padding: $row-padding;
      padding-right: 0;
      border-bottom: $row-border;
      
    }
  }
  .page {
    margin: 0;    
    padding: $panel-space;
    font-size: $font-size;    
    .header {
      @extend .panel;
      width: $page-width;      
      height: 50px;
      padding: 0 $row-horizontal-padding;
    }
    .process {
      margin: $panel-space 0;
      display: flex;


      .calendar {
        @extend .panel;
        width: $page-width - $statics-width - $panel-space;
        margin-right: $panel-space;
      }      

      .statics {
        .progress {
          @extend .panel;
          width: $statics-width;
          height: $statics-height;          
          margin-bottom: $panel-space;
        }
        .delay {
          @extend .panel;
          width: $statics-width;
          height: $statics-height;
        }
      }

    }

    .build {
      @extend .panel;
      width: $page-width;
    }
  }
</style>
<script lang='ts' setup>
import {
  LocationFilled
} from '@element-plus/icons-vue';
import { ref } from 'vue';
import Calendar from '../calendar';

const value = ref('')
const value1 = ref('')
const options = [
  {
    value: '1',
    label: '테스트'
  }
]


</script>
