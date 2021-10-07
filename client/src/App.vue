<template>
  <div>
    <!--INICIO NAVBAR-->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a href="navbar-brand order-md-last">CRUD Node.js + Vue.js + PostGreSQL</a>
      <div class="container">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Create New Employee</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/list-employees">List All Employees</router-link>
            </li>
          </ul>
      </div>
    </nav>
    <!--FIM NAVBAR-->
  </div>
   <div class="container mt-5">
    </div>
  <router-view />
</template>
