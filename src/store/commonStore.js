import {login} from '../service/apiurl';
const store = {
  debug: true,
  state: {
    message: 'Hello!',
    data:[],
    fields: [{key:'first_name',sortable: true}, {key:'last_name',sortable: true}, {key:'age',label: 'Person age',sortable: true}],
    items: [
      { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
    ]
  },
  setMessageAction (newValue) {
    //if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    this.state.message = ''
  },
  updatedata () {
    this.state.items[0].age = this.state.items[0].age + 1;
  },
  async userlist () {
    this.state.data = await login();    
  },

  CleanUserlist () {
    this.state.data = [];
  }

}
export default store