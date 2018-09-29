<template>
  <Modal
    v-model='tableInfo.showModa'
    :closable='false'
    :mask-closable='false'
    title='修改信息'
    @on-ok='ok'
    @on-visible-change='visibleChange'>
      <i-input v-model='data.name' prefix='ios-contact' placeholder='姓名' style='width: auto' />
      <RadioGroup v-model='data.sex'>
        <Radio label=1>
          <Icon type='md-man' />
          <span>男</span>
        </Radio>
        <Radio label=0>
          <Icon type='md-woman' />
          <span>女</span>
        </Radio>
      </RadioGroup>
  </Modal>
</template>
<script>
    export default {
        name: 'WhaoModal',
        props: {
            tableInfo: {
                type: Object,
                default: () => {
                    // return{
                    //   data: [],
                    //   showModa:false,
                    //   selectIndex:0,
                    // }
                }
            }
        },
        data () {
            return {
                data: {
                    name: '',
                    sex: 1
                }
            }
        },
        methods: {
            ok () {
                this.tableInfo.data[this.tableInfo.selectIndex].name = this.data.name
                this.tableInfo.data[this.tableInfo.selectIndex].sex = this.data.sex
                console.log('back:' + JSON.stringify(this.tableInfo))
            },
            visibleChange (status) {
                if (status) {
                    this.data.name = this.tableInfo.data[this.tableInfo.selectIndex].name
                    this.data.sex = this.tableInfo.data[this.tableInfo.selectIndex].sex
                    console.log('come:' + JSON.stringify(this.data))
                }
            }
        }
    }
</script>
