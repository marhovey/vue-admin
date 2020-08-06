<template>
  <div class="login">
    <div class="login-container">
      <div class="login-title">系统登录</div>
      <el-form
        :model="loginInfo"
        status-icon
        :rules="rules"
        ref="ruleForm">
        <el-form-item prop="username">
          <el-input 
            prefix-icon="el-icon-user"
            type="password"
            placeholder="请输入用户名(随便填)"
            v-model="loginInfo.username"
            autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input 
            prefix-icon="el-icon-lock"
            type="password"
            placeholder="请输入密码(随便填)"
            v-model="loginInfo.password"
            autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginInfo: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: `欢迎你，${this.loginInfo.username}`,
            type: 'success'
          });
          this.$router.push({path: '/index'})
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped lang="less">
.login{
  height: 100vh;
  .login-container{
    width: 400px;
    padding-top: 200px;
    margin: 0 auto;
    .login-title{
      text-align: center;
      font-size: 24px;
      text-align: center;
      color: #606266;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .el-button--primary{
      display: block;
      width: 100%;
    }
  }
}
</style>