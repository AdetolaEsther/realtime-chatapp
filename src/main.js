import App from './App.svelte';
import { map, filter } from 'rxjs/operators';


const app = new App({
	target: document.body,
	props: {
	}
});

export default app;