<template >
  <div class='row justify-content-center'>
    <div class='card'>
      <div class='card-header'>
        <h3>Add employee</h3>
      </div>
      <div class='card-body'>
        <form @submit.prevent='handleSubmitForm(employee)'>
          <!--Inicio-->
          <div class='form-group'>
            <labe class='font-weight-bold'> Employee Name </labe>
            <input
              type='text'
              v-model='name'
              class='form-control'
              placeholder='Type Your Name'
              required
            />
          </div>
          <!--Fim-->
          <!--Inicio Job role-->
          <div class='form-group'>
            <labe class='font-weight-bold'> job role </labe>
            <input
              type='text'
              v-model='job_role'
              class='form-control'
              placeholder='Type Your job role'
              required
            />
          </div>
          <!--Fim job role-->
          <!--Inicio Salary-->
          <div class='form-group'>
            <labe class='font-weight-bold'> Salary </labe>
            <input
              type='number'
              v-model='salary'
              class='form-control'
              placeholder='Type Your Salary'
              required
            />
          </div>
          <!--Fim Salary-->
          <!--Inicio Birth-->
          <div class='form-group'>
            <labe class='font-weight-bold'> Birth </labe>
            <input
              type='date'
              v-model='birth'
              class='form-control'
              placeholder='YYYY/MM/DD'
              required
            />
          </div>
          <!--Fim Birth-->
          <!--Inicio Employee Registration-->
          <div class='form-group'>
            <labe class='font-weight-bold'> Employee Registration </labe>
            <input
              type='text'
              v-model='employee_registration'
              class='form-control'
              placeholder='Employee'
              required
            />
          </div>
          <!--Fim Employee Registration-->
          <div class='form-group'>
            <button class='btn btn-primary' type='submit'>+ Employee</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    name: 'CreateEmployComponent',
  },
  data() {
    return {
      employee: {
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: '',
      },
    };
  },
  methods: {
    handleSubmitForm(employee) {
      console.log(employee);
    },
  },
};
</script>
