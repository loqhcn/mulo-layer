import Layer from './layer';

//按需引入
export { 
    Layer
 };

const components = [
    Layer
];

const install = (App) => {
    console.log('install',App);
    App.use(Layer);

	components.forEach((item) => {
		
	});
};

export default { install };
