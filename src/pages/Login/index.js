import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

export default function Login() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	async function handleLogin(e) {
		e.preventDefault();

		const data = { email, password };

		try {
			const response = await api.post('/login', data);

			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="login-container">
			<div className="content">
				<div className="header">
					<h1>Login</h1>
					<h3>Preencha seus dados para realizar login</h3>
				</div>
				<section>
					<form id="login-form" onSubmit={handleLogin}>
						<div className="input-group">
							<span>
								<label htmlFor="email">Email</label>
								<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
							</span>
						</div>

						<div className="input-group">
							<span>
								<label htmlFor="password">Senha</label>
								<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
								<h4>Esqueceu sua senha?</h4>
							</span>
						</div>

						<div className="button-area">
							<button type="submit" className="button-success">
								Entrar
							</button>

							<Link className="link" to="/register">
								<h4>Não possui conta? Cadastre-se!</h4>
							</Link>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
}
