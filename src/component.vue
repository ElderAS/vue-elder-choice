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
$variables: (
  'primary': #3a9acd,
  'border-radius': 3px,
  'border-color': #eaeaea,
);

@function GetVariable($key) {
  @return var(--vue-elder-#{$key}, map-get($variables, $key));
}

.elder-choices {
  $spacing: 1rem;

  display: flex;
  flex-wrap: wrap;

  margin-bottom: -$spacing;
  margin-left: -$spacing;

  &__item {
    font-size: inherit;
    font-weight: bold;

    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;

    margin-bottom: $spacing;
    margin-left: $spacing;

    cursor: pointer;
    transition: background-color 150ms ease-out, color 150ms ease-out;

    border: 1px solid GetVariable('border-color');
    border-radius: GetVariable('border-radius');
    outline: none !important;
    background-color: white;

    &--active {
      border-color: GetVariable('primary');
      background-color: GetVariable('primary');
    }

    &-image {
      flex-grow: 1;

      padding: 1rem 2rem 0;
    }

    &-label {
      padding: 1rem 2rem;
    }
  }
}
</style>
