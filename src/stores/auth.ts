import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApiStore } from '@/stores/api'
import axios from 'axios'
import * as jwt_decode from 'jwt-decode';

export const useAuthStore = defineStore('auth', () => {
    const accessToken = ref('')
    const refreshToken = ref('')
    const tokenExpirationTime = ref(0)
    const refreshInterval = ref(0)

    const isAuthenticated = ref(false)
    const apiStore = useApiStore()

    const setTokens = (access, refresh) => {
        accessToken.value = access;
        refreshToken.value = refresh;

        localStorage.setItem('accessToken', access)
        localStorage.setItem('refreshToken', refresh)

        const decoded = jwt_decode.jwtDecode(access);
        tokenExpirationTime.value = decoded.exp * 1000;
        
        if (refreshInterval.value) clearInterval(refreshInterval.value);
        
        refreshInterval.value = setInterval(refreshTokenFunc, tokenExpirationTime.value - Date.now() - 60000);
    }

    const refreshTokenFunc = async () => {
        try {
          const response = await axios.post('/api/token/refresh/', {
            refresh: refreshToken.value,
          });
          setTokens(response.data.access, refreshToken.value);
        } catch (error) {
          console.error('Token refresh error:', error);
          logout();
        }
    }

    const checkAuthentication = async () => {
        const token = localStorage.getItem('accessToken');
        
        if (token) {
        isAuthenticated.value = true
        apiStore.setApiURL(apiStore.apiBase)
        } else {
        isAuthenticated.value = false
        apiStore.setApiURL(`${apiStore.apiBase}/test`)
        }
    }

    const logout = () => {
        accessToken.value = '';
        refreshToken.value = '';
        tokenExpirationTime.value = 0;

        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')

        if (refreshInterval.value) clearInterval(refreshInterval.value);
        location.reload()
        console.log('logout')
    }

    return {
        setTokens,
        checkAuthentication,
        isAuthenticated,
        logout
    }
})