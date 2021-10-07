<template>
  <div>
    <!--INICIO NAVBAR-->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <a href="navbar-brand order-md-last"
          >CRUD Node.js + Vue.js + PostGreSQL</a
        >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/"
              >Create New Employee</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list-employees"
              >List All Employees</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <CreateEmployComponent />
    <!--FIM NAVBAR-->
  </div>
  <div class="container mt-5"></div>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
