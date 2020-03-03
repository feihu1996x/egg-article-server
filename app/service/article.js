const Service = require('egg').Controller;

class ArticleService extends Service {
    async create(params) {
        const {app} = this;
        try {
            const result = await app.mysql.insert('article', params);
            return result;
        } catch (err) {
            console.log(err);
        }
    }
    async list() {
        const { app } = this;
        try {
            const result = await app.mysql.select('article');
            return result;
        } catch (err) {
            console.log(err);
        }
    }
    async detail(id) {
        if (!id) {
            console.log('id必须传递');
            return;
        }
        try {
            const result = await this.app.mysql.get('article', { id });
            return result;
        } catch (err) {
            console.log(err);
        }

    }
}

module.exports = ArticleService;
