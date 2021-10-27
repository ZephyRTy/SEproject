import { autorun, makeAutoObservable } from 'mobx';
import { User } from './user';

export let user = makeAutoObservable(new User());
autorun(() => {
	console.log(user.isLogIn);
});
