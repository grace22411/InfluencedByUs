
const app = new Vue({
    el : "#app",
    data : {
        firstName : '',
        lastName : '',
        email : '',
        password: '',
        phoneNumber: ''
    },
    computed: {
        fullName: {
          get: function() {
            if (this.firstName && this.lastName) {
              return this.firstName + ' ' + this.lastName;
            } else {
              return this.firstName || this.lastName;
            }
          },
          set: function(newFullName) {
            const names = newFullName.split(' ');
    
            if (names.length === 2) {
              this.firstName = names[0];
              this.lastName = names[1];
            }
            
            if (names.length <= 1) {
              this.firstName = names[0] || '';
              this.lastName = '';
            }
          }
        },
        formIsValid : function(){
          return this.firstName && this.lastName && this.email && this.purchaseAgreementSigned;
        }
      }
});