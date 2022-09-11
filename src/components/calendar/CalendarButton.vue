<template>
    <button :class="[isSelected ? 'is-selected' : '']">
        <slot />
    </button>
</template>
<style lang="scss" scoped>    
    button {
        padding: 6px;
        margin: 2px;
        border-radius: 4px;
        font-size: 14px;
        border: 1px solid #d7d7d7;
        background-color: #fff;
    }
    .is-selected {
        background-color: #409eff;
        color: #fff;
    }
    button:focus {
        outline: 0;
    }
</style>
<script lang="ts">
    export default {
        props: {
            isSelected: Boolean
        }
    }
</script>