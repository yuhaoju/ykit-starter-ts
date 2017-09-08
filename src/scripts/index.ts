import {http} from './common/http';

http.moduleA.getItemById({
    id: 'abc'
}, (res) => {
    // 打开下面的注释，ts 会提示 org is possibly undefined
    // console.log(res.result.org.groupId)
})
