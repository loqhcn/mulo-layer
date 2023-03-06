
import MuloAlert from './src/index.js'
let component = {

}

component.install = (App)=>{
    console.log('MuloAlert',MuloAlert)
    App.config.globalProperties.$alert = MuloAlert.$message;
}

export default component;