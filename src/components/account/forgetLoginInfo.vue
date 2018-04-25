<template>
<div class='forget-login-area'>
    <button class='close-modal-button' v-html="$closeicon()" @click="$closeModal(modalObj.forgetLoginInfo)" />
    <nav class='header noselect'>forget login information</nav>
    <nav class='sub-header noselect'>Please enter your email address, then the system will send new password to your email according to relevant information</nav>
    <nav class='input-area' :class="error.email ? 'error-input-area' : ''">
        <el-input type='email' placeholder="user email" icon="user" v-model="inputObj.email" clearable>
            <span slot="prefix" v-html="$icon('envelope-o', 'el-input__icon')" />
            <span slot="suffix" v-html="$icon('times', 'el-input__icon')" v-if='error.email' />
        </el-input>
        <label v-if="error.email" class='error-message'>{{ _.get(error,'emailMsg') }}</label>
    </nav>
    <el-button class='send-btn' @click="sendRequest()">submit find request</el-button>
</div>
</template>
<script>
export default {
    watch: {
        'inputObj.email': function(email) {
            let self = this;
            self.error.email = false;
            if (_.isEmpty(email)) {
                self.error.email = true;
                self.error.emailMsg = 'user email can not be empty';
            }
        }
    },
    data() {
        return {
            modalObj: {
                forgetLoginInfo: 'forgetModal'
            },
            error: {
                email: false,
                emailMsg: ''
            },
            inputObj: {
                email: ''
            }
        };
    },
    methods: {
        sendRequest() {
            let self = this;
            let email = _.get(self.inputObj, 'email');
            if (_.isEmpty(email)) {
                self.error.email = true;
                self.error.emailMsg = 'user email can not be empty';
            } else {
                self.error.email = false;
                self.$dropTips('find request email has been sent, please check your email', 'success');
            }
        }
    }
};
</script>
