const app = {
    data() {
        return {
            name: 'Lucky KL',
            image: './images/lucky.jpg',
            follower: '14.3K',
            post: 15,
            comments: 895,
            favorites: 49
        }
    }
}

var mountedApp = Vue.createApp(app).mount('#app')