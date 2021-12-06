import {mainUser} from '../data/tests.config'

module.exports = {
    'User Logs in': (client) => {
        this.tags=['login'];
        client.maximizeWindow();
        const loginPage = client.page.login();
        loginPage
            .navigate()
            .login(mainUser.username, mainUser.password);
    }
};