<template>
    <h1>关于我们</h1>
    <div class="about-content">
        <img src="./icons/南开校徽.png" alt="团队图标" class="about-logo" />
        <div>
            <p>
                本应用结合大模型能力，对南开大学各类公众号的数据进行整理、收集与智能提炼，为用户提供实时、权威、便捷的南开资讯服务。
            </p>
            <ul>
                <li>🌟 自动聚合南开大学各公众号最新动态</li>
                <li>🔍 智能提炼关键信息，快速响应用户提问</li>
                <li>💡 实时推送校园资讯，助力师生获取一手信息</li>
                <li>🔒 注重用户隐私与数据安全</li>
            </ul>
            <p>
                了解更多信息，请访问
                <p>
                    <a href="https://freshnkuer.wiki/" target="_blank">南开新生手册</a>
                    <br />
                    <a href="https://nkuse.icu/#/" target="_blank">南开大学软件学院信息共享平台</a>
                    <br />
                    <a href="https://mp.weixin.qq.com/s/aPlf0SnclonwnZOR_7ObbA" target="_blank">南开大学公众号列表</a>
                </p>
            </p>
        </div>
    </div>
</template>

<script>
</script>


<style scoped>
.about {
    max-width: 900px;
    margin: 40px auto;
    padding: 40px 48px; 
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.about-content {
    display: flex;
    align-items: flex-start;
    gap: 36px;
    color: #000; /* 正文字体颜色为黑色 */
}

.about-content > div {
    flex: 1 1 0%;
    min-width: 0;
    word-break: break-all;
}

h1 {
    color: #000; /* “关于我们”标题字体颜色为黑色 */
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 18px;
}


.about-logo {
    width: 96px;
    height: 96px;
    border-radius: 12px;
    background: #f5f7fa;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.about ul {
    margin: 16px 0;
    padding-left: 20px;
}

.about li {
    margin-bottom: 8px;
    font-size: 16px;
}

.about a {
    color: #1976d2;
    text-decoration: underline;
}
</style>