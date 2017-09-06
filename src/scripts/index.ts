import {http} from './common/http';

http.moduleA.getItemById({
    id: 'abc'
}, (res) => {
    console.log(res.result.org.groupId)
})
