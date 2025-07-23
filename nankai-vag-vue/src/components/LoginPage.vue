<template>
    <div class="login-page">
        <div class="login-box">
            <h1>欢迎访问GNKH</h1>
            <form @submit.prevent>
                <div class="input-group">
                    <label for="username">用户名</label>
                    <input id="username" v-model="username" type="text" placeholder="请输入用户名" required
                        autocomplete="username" />
                </div>
                <div class="input-group">
                    <label for="password">密码</label>
                    <input id="password" v-model="password" type="password" placeholder="请输入密码" required
                        autocomplete="current-password" />
                </div>
                <RouterLink v-if="username && password" to="/chat" class="login-btn" @click='tryCrawl'>登录</RouterLink>
                <button v-else class="login-btn disabled" disabled>登录</button>
                <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const username = ref('')
const password = ref('')
const errorMsg = ref('')

async function tryCrawl() {
    console.log('Crawl request sent')
    await fetch('http://localhost:8090/tryCrawl', {
        method: 'POST',
    })
}


</script>

<style scoped>
.login-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.login-box {
    background: #fff;
    padding: 56px 48px 44px 48px;
    border-radius: 24px;
    box-shadow: 0 8px 40px rgba(37, 117, 252, 0.10);
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    color: #2563eb;
    margin-bottom: 40px;
    font-size: 2.2rem;
    font-weight: bold;
    letter-spacing: 2px;
}

.input-group {
    width: 100%;
    margin-bottom: 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

label {
    color: #2563eb;
    margin-bottom: 8px;
    font-size: 1.05rem;
    font-weight: 500;
}

input {
    width: 100%;
    padding: 12px 14px;
    border-radius: 8px;
    border: 1.5px solid #b6d0f7;
    background: #f6faff;
    color: #2563eb;
    font-size: 1.08rem;
    outline: none;
    box-sizing: border-box;
    transition: border 0.2s, background 0.2s;
}

input:focus {
    border-color: #2563eb;
    background: #e3f0ff;
}

.login-btn {
    width: 100%;
    padding: 14px 0;
    background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1.15rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition: background 0.2s, opacity 0.2s;
}

.login-btn:hover {
    background: linear-gradient(90deg, #1d4ed8 0%, #3b82f6 100%);
    opacity: 0.95;
}

.login-btn.disabled,
.login-btn[disabled] {
    background: #b6d0f7;
    color: #fff;
    cursor: not-allowed;
    opacity: 0.7;
    pointer-events: none;
}

.error-msg {
    color: #ef4444;
    margin-top: 18px;
    font-size: 1rem;
    text-align: center;
}
</style>