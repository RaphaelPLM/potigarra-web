import React, { useState, Fragment } from 'react';
import './styles.css';
import api from '../../services/api';

import profilePicture from '../../assets/default-user.png';

export default function Register() {
	const [ currentForm, setCurrentForm ] = useState(1);

	function formSwitch() {
		console.log('Formulário atual: ', currentForm);

		switch (currentForm) {
			case 1:
				return PersonalInfo();
			case 2:
				return Credentials();
			default:
				return PersonalInfo();
		}
	}

	function Credentials() {
		return (
			<Fragment>
				<div className="header">
					<h1>Cadastro</h1>
					<h3>Atualize sua foto de perfil e crie suas credenciais</h3>
				</div>
				<div className="body-credentials">
					<section>
						<form>
							<div className="input-group">
								<span>
									<label htmlFor="email">Email</label>
									<input type="email" id="email" placeholder="Informe o seu email" />
								</span>
							</div>

							<div className="input-group">
								<span>
									<label htmlFor="password">Senha</label>
									<input type="password" id="password" placeholder="Senha" />
								</span>
							</div>

							<div className="input-group">
								<span>
									<label htmlFor="password-confirmation">Confirmação de senha</label>
									<input
										type="password"
										id="password-confirmation"
										placeholder="Confirme a sua senha"
									/>
								</span>
							</div>
						</form>

						<div className="button-area">
							<button className="button-back" onClick={() => setCurrentForm(currentForm - 1)}>
								Voltar
							</button>

							<button className="button-success">Cadastrar</button>
						</div>
					</section>

					<div className="user-card">
						<img height="150px" width="150px" src={profilePicture} />

						<div>
							<label htmlFor="card-name">Nome</label>
							<h3 id="card-name">Brad Pitt</h3>
						</div>
						<div>
							<label htmlFor="card-cpf">CPF</label>
							<h3 id="card-cpf">123.456.789-00</h3>
						</div>
						<div>
							<label htmlFor="card-rg">RG</label>
							<h3 id="card-rg">1.234.567</h3>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}

	function PersonalInfo() {
		return (
			<Fragment>
				<div className="header">
					<h1>Cadastro</h1>
					<h3>Conte-nos um pouco sobre você</h3>
				</div>
				<section>
					<form>
						<div className="input-group">
							<span>
								<label htmlFor="username">Nome completo</label>
								<input id="username" placeholder="Informe o seu nome completo" />
							</span>
						</div>
						<div className="input-group">
							<span>
								<label htmlFor="cpf">CPF</label>
								<input id="cpf" placeholder="Informe o seu CPF" />
							</span>
							<span>
								<label htmlFor="rg">RG</label>
								<input id="rg" placeholder="Informe o seu RG" />
							</span>
							<span>
								<label htmlFor="phone-number">N° de celular</label>
								<input id="phone-number" placeholder="Informe o número do seu celular, com DDD" />
							</span>
						</div>

						<div className="input-group">
							<span>
								<label htmlFor="cpf">Data de nascimento</label>
								<input id="cpf" placeholder="Informe a sua data de nascimento" />
							</span>
							<span>
								<label htmlFor="gender">Sexo</label>
								<select placeholder="teste" id="gender" name="gender">
									<option value="" selected />
									<option value="m">Masculino</option>
									<option value="f">Feminino</option>
								</select>
							</span>
							<span>
								<label htmlFor="class-number">Turma</label>
								<select id="class-number" name="class">
									<option value="" selected />
									<option value="1">1</option>
									<option value="2">2</option>
								</select>
							</span>
						</div>
					</form>
				</section>

				<div className="button-area">
					<button className="button-back" onClick={() => setCurrentForm(currentForm - 1)}>
						Voltar
					</button>

					<button className="button-next" onClick={() => setCurrentForm(currentForm + 1)}>
						Avançar
					</button>
				</div>
			</Fragment>
		);
	}

	return (
		<div className="register-container">
			<div className="content">{formSwitch()}</div>
		</div>
	);
}
