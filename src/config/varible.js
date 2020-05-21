export default class Varible {
    static SELECT_INDEX = [
        {
            text: '客户信息',
            content: [
                {
                    name: '展会纪录',
                    icon: require('@/assets/images/select/icon_sort_expo.png')
                },
                {
                    name: '拜访纪录',
                    icon: require('@/assets/images/select/icon_sort_visit.png')
                },
                {
                    name: '业务调度',
                    icon: require('@/assets/images/select/icon_sort_dispatch.png')
                },
                {
                    name: '寄版记录',
                    icon: require('@/assets/images/select/icon_sort_test.png')
                },
                {
                    name: '问题中心',
                    icon: require('@/assets/images/select/icon_sort_question.png')
                },
            ]
        },
        {
            text: '产品信息',
            content: [
                {
                    name: '产品信息',
                    icon: require('@/assets/images/select/icon_sort_product.png')
                },
                {
                    name: '面料信息',
                    icon: require('@/assets/images/select/icon_sort_fabric.png')
                },
                {
                    name: '面料测试数据',
                    icon: require('@/assets/images/select/icon_sort_test.png')
                },
                {
                    name: '仓库数据',
                    icon: require('@/assets/images/select/icon_sort_send.png')
                }
            ]
        },
        {
            text: '销售数据',
            content: [
                {
                    name: '销售数据',
                    icon: require('@/assets/images/select/icon_sort_sale.png')
                }
            ]
        }
    ]
}