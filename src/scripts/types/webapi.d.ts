declare namespace webapi {

    // 约定数据返回格式
    export interface IResponse<T> {
        // 成功
        code: string;
        // 数据集
        result: T;
    }

    // 分页的标准化
    export interface IPageableRequest {
        pageSize: number;
        pageIndex: number;
    }

    // 标准的分页返回数据格式
    export interface IPageableResponse<T> {
        items: T[];
        page: {
            pageSize: number;
            pageIndex: number;
            total: number;
        }
    }

    /**
     * A 模块业务的 API
     */
    namespace moduleA {
        // 一个数据实体
        export interface IOrg {
            name: string;
            groupId: number;
        }
        export interface IItemType {
            id: number;
            name: string;
            groupId: number;
            org?: IOrg
        }
        namespace request {
            // 一个读取数据的 API 实例
            export interface getItemById {
                id;
            }
            // 请求数据分页的接口
            export interface getItems extends IPageableRequest {
                ids?: number[];
                groupId?: number;
            }
        }
        namespace response {
            export type getItemById = IResponse<IItemType>;
            export type getItems = IResponse<IPageableResponse<IItemType>>;
        }
    }
}
