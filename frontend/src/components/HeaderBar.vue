<template>
  <div class="component">
    <div class="left">
      <h1>Appointments</h1>
    </div>
    <div class="right">
      <router-link to="/appointments">Show Appointments</router-link>
      <router-link to="/appointments/add">New Appointments</router-link>
      <router-link to="/customers">Show Customers</router-link>
      <router-link to="/customers/add">New Customer</router-link>
    </div>
  </div>
</template>

<style scoped>
.component {
  display: flex;
  justify-content: space-between;
  background-color: var(--gruv-grey-dark);
}

.left {
  width: 30vw;
  padding-left: 20px;
}

.right {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
