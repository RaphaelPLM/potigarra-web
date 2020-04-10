import api from './api';

export const login = (token) => {
	localStorage.setItem('@potigarra/token', token);
};

export const isAuthenticated = async (token) => {
	try {
    const response = await api.get('/verifyToken', { headers: { Authorization: 'Bearer ' + token } });
    
		return true;
	} catch (error) {
		return false;
	}
};
