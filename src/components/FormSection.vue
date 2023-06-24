<template>
  <div id="scrollspySection4" class="bg-pricing">
    <div class="blur-form">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-lg-7">
          <div class="formTable">
            <h1 class="form-header"><b>Receive Information</b></h1>
            <div class="form-group">
              <!-- <label for="exampleInputEmail1">Name</label> -->
              <input
                class="input-form-section"
                id="exampleInputEmail1"
                type="text"
                v-model="name"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                class="input-form-section"
                type="email"
                v-model="email"
                placeholder="Email"
              />
            </div>
            <div>
              <button
                class="btn-submit"
                type="submit"
                @click="onSubmit(name, email)"
              >
                Submit
              </button>
              <button class="btn-clear" type="submit" @click="clearData">
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "formSection",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    onSubmit(name, email) {
      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      if (name && email) {
        if (validateEmail(email) != null) {
          this.$swal(
            "Good job!",
            `Name: ${name} <br/> Email: ${email}`,
            "success"
          );
        } else {
          this.$swal("Error!", `Invalid type email`, "error");
        }
      } else {
        this.$swal("Error!", `Invalid Name, Email`, "error");
      }
    },
    clearData() {
      this.name = "";
      this.email = "";
    },
  },
};
</script>
<style lang=""></style>
