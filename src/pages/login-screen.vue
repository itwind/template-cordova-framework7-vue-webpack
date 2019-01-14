<template>
	<f7-page login-screen>
	  <f7-login-screen-title>Login</f7-login-screen-title>
	  <f7-list form>
		<f7-list-item>
		  <f7-label>Username</f7-label>
		  <f7-input name="username" placeholder="Username" type="text"></f7-input>
		</f7-list-item>
		<f7-list-item>
		  <f7-label>Password</f7-label>
		  <f7-input name="password" type="password" placeholder="Password"></f7-input>
		</f7-list-item>
	  </f7-list>
	  <f7-list>
		<f7-list-button title="Sign In" login-screen-close></f7-list-button>
		<f7-block-footer>
		  <p>Click Sign In to close Login Screen</p>
		</f7-block-footer>
	  </f7-list>
	</f7-page>
</template>

<script>
  import constant from '../utils/constant'

  export default {
    name: "login-screen",
    data() {
      return {
        constant,
        scfcc: '',
        scfcu: '',
        logonForm: {
          j_merchant: '',
          j_username: '',
          j_password: '',
          j_captcha: '',
          rem: '',
          rememberUserName: true
        },
        logonRules: {
          j_username: [
            {
              required: true,
              message: '请输入用户名'
            },
            {
              min: 2,
              message: '用户名长度最少2位'
            }
          ],
          j_password: [
            {
              required: true,
              message: '请输入密码'
            }
          ],
          j_captcha: [
            {
              required: true,
              message: '请输入图形验证码'
            }
          ]
        }
      }
    },
    methods: {
      verifyClickHandler: function() {
        this.$refs['captchaImg'].src = constant.SERVER_BASE_URL + 'verify.jpg?'+Math.random()
      },
      logon: function () {
        this.$http.logon(this.logonForm)
          .then(res => {
            window.localStorage.setItem('scfcc', res.scfcc || '')
            window.localStorage.setItem('scfcu', res.scfcu || '')

            this.$f7.dialog.alert('登录成功', ()=>{
              this.$f7.loginScreen.close()
            })
          })
          .catch(error => {
            this.$f7.dialog.alert(error.errmsg || '登录失败！')
            this.verifyClickHandler()
          })
      },
      getUserInfo: function () {
      }
    }
  }
</script>

<style scoped>

</style>
