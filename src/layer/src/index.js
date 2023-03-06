import { h, render } from 'vue'

import componentBody from './Index.vue'

let main = {
    
    $message(msg,options){
        let dom = h(componentBody)
        console.log(dom);
        // 添加到根部
        let div = document.createElement('div');
        render(dom,div);
        document.body.append(div);
    }
    
}

export default main