<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control title"
      type="text"
      placeholder="Search for Movies, Series & more"
      @keyup.enter="apply"
    />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        :class="`search__${filter.name}`"
        class="form-select search__select"
      >
        <option
          v-if="filter.name === 'year'"
          value=""
        >
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item"
        >
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply"
    >
      Apply
    </button>
  </div>
</template>

<script>
//const thisYear = new Date().getFullYear()



</script>

<style lang="scss" scoped>
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      border: 1px solid #777;

      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
  }
  input{

    border: 1px solid #777;
  }

}
</style>