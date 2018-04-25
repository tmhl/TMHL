<template>
<div class='login-area'>
    <div class='white-space-area'>
        <nav class='header noselect'>sign in</nav>
        <nav class='input-area'>
            <el-input placeholder="user account" icon="user" v-model="inputObj.account" clearable>
                <span slot="prefix" v-html="$icon('user', 'el-input__icon')" />
            </el-input>
        </nav>
        <nav class='input-area'>
            <el-input type="password" placeholder="user password" v-model="inputObj.password" auto-complete="off" clearable>
                <span slot="prefix" v-html="$icon('lock', 'el-input__icon')" />
            </el-input>
        </nav>
        <el-button class='login-btn'>login</el-button>
        <div class='forget-btn' @click='$popModal(modalObj.forgetLoginInfo)'>forget login information ?</div>
        <div class='develop-word noselect'>copyright © 2016 TMHL all rights reserved</div>
    </div>
    <!-- modal area -->
    <modal :name='modalObj.forgetLoginInfo' class='basic-modal' height='auto' width='600px' :scrollable='true'>
        <forgetLoginInfo/>
    </modal>
    <!-- modal area -->
</div>
</template>
<script>
import forgetLoginInfo from '@/components/account/forgetLoginInfo';
export default {
    data() {
        return {
            inputObj: {
                account: '',
                password: ''
            },
            modalObj: {
                forgetLoginInfo: 'forgetModal'
            }
        };
    },
    components: {
        forgetLoginInfo
    }
};
</script>
