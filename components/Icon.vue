<script lang="ts" setup>
defineProps<{ icon: String }>();
</script>


<template>
    <span class="c-icon">
        <svg class="c-icon__src">
            <use v-bind="{ 'xlink:href': `/svg/sprite.svg#svg-${icon}` }"></use>
        </svg>
    </span>
</template>


<style lang="scss">
@use '~/assets/scss/components/icon';
</style>
