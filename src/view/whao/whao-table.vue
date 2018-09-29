<template>
  <row>
      <i-col  type="flex" offset="1" span="22" justify="center">
        <Card title="分页Demo" shadow>
          <i-table stripe border :loading="loading" :columns="columns" :data="tableInfo.data"></i-table>
          <Page :total="total" :current="current" :page-size="pageSize" style="display:inline-block;margin-top: 20px"
                @on-change="changePage" @on-page-size-change="changePageSize" show-elevator show-sizer />
        </Card>
      </i-col>
      <i-col>
        <whao-modal :tableInfo="tableInfo"></whao-modal>
      </i-col>
  </row>
</template>

<script>
    import { getPageInfoData } from '@/api/data'
    import WhaoModal from './whao-modal'
    export default {
        name: 'WhaoTable',
        data () {
            return {
                loading: true,
                columns: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '性别',
                        key: 'sex'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        align: 'center',
                        width: 200,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        shape: 'circle',
                                        icon: 'ios-create-outline'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        shape: 'circle',
                                        icon: 'ios-trash-outline'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                })
                            ])
                        }
                    }
                ],
                total: 0,
                current: 1,
                pageSize: 10,
                tableInfo: {
                    data: [],
                    showModa: false,
                    selectIndex: 0
                }
            }
        },
        methods: {
            show (index) {
                this.tableInfo.selectIndex = index
                this.tableInfo.showModa = true
            },
            remove (index) {
                this.tableInfo.data.splice(index, 1)
            },
            changePage (current) {
                this.loading = true
                this.$Message.info('加载第' + current + '页数据')
                getPageInfoData(current, this.pageSize)
                    .then(res => {
                        const pageInfo = res.data
                        this.total = pageInfo.total
                        this.current = pageInfo.current
                        this.tableInfo.data = pageInfo.data
                        this.loading = false
                    })
                    .catch(err => { console.log(err) })
            },
            changePageSize (pageSize) {
                this.pageSize = pageSize
            }
        },
        mounted: function () {
            this.changePage(1)
        },
        components: {
            WhaoModal
        }
    }
</script>
