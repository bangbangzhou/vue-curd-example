import http from "@/util/http-common";

class AuthService {

    login(user) {
        return http
            .post( '/auth/signin', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data) {
                    localStorage.setItem('user', JSON.stringify(response.data.data));
                }

                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return http.post( '/auth/signup', {
            username: user.username,
            password: user.password
        });
    }
}
export default new AuthService();