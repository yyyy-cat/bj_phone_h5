export default class Varible {
    static SELECT_INDEX = [
        {
            text: '客户信息',
            content: [
                {
                    name: '展会纪录',
                    icon: require('@/assets/images/select/icon_sort_expo.png'),
                    route: '/ERecord',
                },
                {
                    name: '拜访纪录',
                    icon: require('@/assets/images/select/icon_sort_visit.png'),
                    route: '/bfjl',
                },
                {
                    name: '业务调度',
                    icon: require('@/assets/images/select/icon_sort_dispatch.png'),
                    route: '/ywdd',
                },
                {
                    name: '寄版记录',
                    icon: require('@/assets/images/select/icon_sort_test.png'),
                    route: '/jbjl',
                },
                {
                    name: '问题中心',
                    icon: require('@/assets/images/select/icon_sort_question.png'),
                    route: '/wtzx',
                },
            ]
        },
        {
            text: '产品信息',
            content: [
                {
                    name: '产品信息',
                    icon: require('@/assets/images/select/icon_sort_product.png'),
                    route: '/cpxx',
                },
                {
                    name: '面料信息',
                    icon: require('@/assets/images/select/icon_sort_fabric.png'),
                    route: '/mlxx',
                },
                {
                    name: '面料测试数据',
                    icon: require('@/assets/images/select/icon_sort_test.png'),
                    route: '/mlcssj',
                },
                {
                    name: '仓库数据',
                    icon: require('@/assets/images/select/icon_sort_send.png'),
                    route: '/cksj',
                }
            ]
        },
        {
            text: '销售数据',
            content: [
                {
                    name: '销售数据',
                    icon: require('@/assets/images/select/icon_sort_sale.png'),
                    route: '/xssj',
                }
            ]
        }
    ]
}