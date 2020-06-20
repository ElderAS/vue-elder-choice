<template>
  <div class="elder-choices">
    <button
      class="elder-choices__item"
      v-for="(item, index) in values"
      :key="index"
      type="button"
      :class="{ 'elder-choices__item--active': value === item.value }"
      @click="$emit('input', item.value)"
    >
      <span v-if="$scopedSlots.image" class="elder-choices__item-image">
        <slot name="image" :item="item" :active="value === item.value" />
      </span>
      <span class="elder-choices__item-label">
        <slot name="label" :item="item">{{ item.label }}</slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Object, Number, Boolean],
    values: Array,
  },
}
</script>

<style lang="scss">
@import './main';

:root {
  @include GenerateVariables();
}

.elder-choices {
  $spacing: 1rem;

  display: flex;
  flex-wrap: wrap;
  margin-left: -$spacing;
  margin-bottom: -$spacing;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    margin-left: $spacing;
    margin-bottom: $spacing;

    border-radius: GetVariable('border-radius');
    background-color: white;

    font-weight: bold;
    font-size: inherit;
    border: 1px solid GetVariable('border-color');
    cursor: pointer;
    outline: none !important;

    transition: background-color 150ms ease-out, color 150ms ease-out;

    &--active {
      border-color: GetVariable('border-color');
      background-color: GetVariable('primary');
      color: white;
    }

    &-image {
      padding: 1rem 2rem 0;
      flex-grow: 1;
    }

    &-label {
      padding: 1rem 2rem;
    }
  }
}
</style>
