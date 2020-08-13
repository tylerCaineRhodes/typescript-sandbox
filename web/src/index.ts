import { User } from './models/User';

const user = new User({name: 'tyler', age: 25});

user.on('change', () => {
  console.log('change no 1')
});

user.on('change', () => {
  console.log('change no 2');
});

user.on('save', () => {
  console.log('saved');
});

user.trigger('save')

console.log(user)