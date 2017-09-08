export namespace http {
    // 工厂模式创建 API
    function createAPI<TReq, TRes>(url: string, method?: string) {
        return function (req: TReq, success: (res: TRes) => void, error?, complete?) {
            // jquery import as global variable
            $.ajax({
                url: url,
                method: method || 'GET',
                data: req ? JSON.stringify(req) : null,
                success: (data, status, jXHR) => {
                    success(data);
                },
                error: error,
                complete: complete
            })
        }
    }

    // 创建模块 A 的接口
    export namespace moduleA {
        type Req_getItemById = webapi.moduleA.request.getItemById;
        type Res_getItemById = webapi.moduleA.response.getItemById;
        export var getItemById = createAPI<Req_getItemById, Res_getItemById>(
            'http://yapi.corp.qunar.com/mock/58/getItems', 'GET'
        );

        type Req_getItems = webapi.moduleA.request.getItems;
        type Res_getItems = webapi.moduleA.response.getItems;
        export var getItems = createAPI<Req_getItems, Res_getItems>(
            'http://yapi.corp.qunar.com/mock/58/getItems', 'GET'
        )
    }
}
