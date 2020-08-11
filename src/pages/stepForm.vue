<template>
  <div class="step-form page-content">
    <el-steps :active="step" simple>
      <el-step title="填写转账信息" icon="el-icon-edit-outline"></el-step>
      <el-step title="确认转账信息" icon="el-icon-document-checked"></el-step>
      <el-step title="完成" icon="el-icon-circle-check"></el-step>
    </el-steps>
    <div class="form-area">
      <el-form
        v-if="step === 1"
        :model="infoForm"
        :rules="infoRules"
        ref="infoForm"
        label-width="100px">
        <el-form-item 
          v-for="item in infoFormList"
          :key="item.key"
          :prop="item.key"
          :label="item.label"
        >
          <el-select v-if="item.type === 'select'" v-model="infoForm[item.key]" :placeholder="'请选择' + item.label">
            <el-option
              v-for="option in item.options"
              :key="option.value"
              :label="option.label"
              :value="option.value">
            </el-option>
          </el-select>
          <el-input v-else v-model="infoForm[item.key]" :placeholder="'请输入' + item.label">
            <template v-if="item.prefix" slot="prefix">{{item.prefix}}</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changeStep(2, true)">下一步</el-button>
        </el-form-item>
      </el-form>
      <div class=""
        v-else-if="step === 2">
        <el-alert
          title="确认转账后，资金将直接打入对方账户，无法退回。"
          type="warning"
          show-icon>
        </el-alert>
        <custom-descriptions
          :rowConfig="{
            lg: 24,
            md: 24,
            xl: 24,
            sm: 24,
            xs: 24
          }"
          :descList="descList"
        >
        </custom-descriptions>
        <el-form
          :model="passForm"
          :rules="passRules"
          ref="passForm"
          label-width="100px">
          <el-divider></el-divider>
          <el-form-item label="支付密码" prop="password">
            <el-input type="password" v-model="passForm.password" placeholder="请输入支付密码">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="changeStep(1)">上一步</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class=""
        v-else>
        <custom-result
          status="success"
          title="操作成功"
          subTitle="预计两小时内到账"
        >
          <template slot="extra">
            <el-button @click="changeStep(1)" size="small" type="primary">再转一笔</el-button>
            <el-button size="small">查看订单</el-button>
          </template>
          <template>
            <custom-descriptions
              :rowConfig="{
                lg: 24,
                md: 24,
                xl: 24,
                sm: 24,
                xs: 24
              }"
              :descList="descList"
            >
            </custom-descriptions>
          </template>
        </custom-result>
      </div>
    </div>
  </div>
</template>

<script>
import descriptions from '../components/desc';
import result from '../components/result';
export default {
  name: 'stepForm',
  components: {
    'custom-descriptions': descriptions,
    'custom-result': result
  },
  data() {
    return {
      step: 1,
      infoForm: {
        from: '1',
        to: 'honvey@alipay.com',
        name: 'marvey',
        price: 100,
        type: '1'
      },
      infoFormList: [
        {
          label: '付款账户',
          type: 'select',
          key: 'from',
          options: [
            {
              label: 'marvey@alipay.com',
              value: '1'
            }
          ]
        },
        {
          label: '收款账户',
          key: 'to'
        },
        {
          label: '收款人姓名',
          key: 'name'
        },
        {
          label: '金额',
          key: 'price',
          prefix: '￥'
        },
        {
          label: '到账方式',
          key: 'type',
          type: 'select',
          options: [
            {
              value: '1',
              label: '实时到账'
            },
            {
              value: '2',
              label: '24小时到账'
            }
          ]
        }
      ],
      infoRules: {
        name: [
          {
            required: true,
            message: '请输入收款人姓名'
          }
        ],
        from: [
          {
            required: true,
            message: '请选择付款账户'
          }
        ],
        to: [
          {
            required: true,
            message: '请输入收款账户'
          }
        ],
        price: [
          {
            required: true,
            message: '请输入金额'
          }
        ],
        type: [
          {
            required: true,
            message: '请选择到款方式'
          }
        ]
      },
      descList: [],
      passForm: {
        password: '123456'
      },
      passRules: {
        password: [
          {
            required: true,
            message: '请输入支付密码'
          }
        ]
      },
      loading: false
    }
  },
  methods: {
    changeStep(step, flag) {
      if(!flag) {
        return this.step = step
      }
      this.$refs.infoForm.validate((valid) => {
        if(valid) {
          this.step = step
          this.descList = this.infoFormList.map((v) => {
            const value = v.type === 'select'?
              v.options.find(item => item.value === this.infoForm[v.key]).label:
                this.infoForm[v.key]
            return {
              label: v.label,
              key: v.key,
              value
            }
          })
        } else {
          return false
        }
      })
    },
    onSubmit() {
      this.$refs.passForm.validate(valid => {
        if(!valid) {
          return false
        }
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.changeStep(3)
        }, 1000)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.step-form{
  .form-area{
    padding-top: 50px;
    max-width: 500px;
    margin: 0 auto;
    .el-select{
      display: block;
    }
    .el-alert{
      margin-bottom: 24px;
    }
  }
}
</style>