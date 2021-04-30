import App from './App.svelte';

const app = new App({
	target: document.body, //quiero que la aplicacion me la carges en el body del index.html
	props: {
		name: 'World'
		
	}
});

export default app;