import axios from 'axios'
import router from '../routes/router.ts'
export default [axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("usu_token");
        if (token) {
            config.headers.common["Response-token"] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
),

axios.interceptors.response.use(
    response => {
        if (response.data.codigo !== '001' || response.data.codigo == undefined) {
            return Promise.resolve(response);
        } else {
            localStorage.removeItem("usu_token")
            router.replace({
                path: "/login",
                query: { redirect: router.currentRoute.fullPath }
            });

        }

        return Promise.reject(response.data);
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 400:

                    //do something
                    break;

                case 401:
                    alert("session expired");
                    break;
                case 403:
                    router.replace({
                        path: "/login",
                        query: { redirect: router.currentRoute.fullPath }
                    });
                    break;
                case 404:
                    alert('page not exist');
                    break;
                case 502:
                    setTimeout(() => {
                        router.replace({
                            path: "/login",
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
            }
            return Promise.reject(error.response);
        }
    }
)]