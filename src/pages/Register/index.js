import React, { useState, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import MaskedInput from 'react-text-mask';

import profilePicture from '../../assets/default-user.png';

export default function Register() {
	const [ currentForm, setCurrentForm ] = useState(1);

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

	const [ username, setUsername ] = useState('');
	const [ cpf, setCpf ] = useState('');
	const [ rg, setRg ] = useState('');
	const [ gender, setGender ] = useState('');
	const [ birthdate, setBirthdate ] = useState('');
	const [ phoneNumber, setPhoneNumber ] = useState('');
	const [ classNumber, setClassNumber ] = useState(-1);

	const history = useHistory();

	function formSwitch() {
		switch (currentForm) {
			case 1:
				return PersonalInfo();
			case 2:
				return Credentials();
			default:
				return PersonalInfo();
		}
	}

	async function handleRegister(e) {
		e.preventDefault();

		const data = {
			username: username,
			email: email,
			password: password,
			passwordConfirmation: passwordConfirmation,
			cpf: cpf,
			rg: rg,
			birthdate: birthdate,
			classNumber: classNumber,
			phoneNumber: phoneNumber,
			gender: gender
		};

		try {
			const response = await api.post('/register', data);

			history.push('/');
		} catch (error) {
			console.log('[ERROR]', error);
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
						<form id="credentials-form" onSubmit={handleRegister}>
							<div className="input-group">
								<span>
									<label htmlFor="email">Email</label>
									<input
										onChange={(e) => setEmail(e.target.value)}
										value={email}
										type="email"
										id="email"
										placeholder="Informe o seu email"
									/>
								</span>
							</div>

							<div className="input-group">
								<span>
									<label htmlFor="password">Senha</label>
									<input
										onChange={(e) => setPassword(e.target.value)}
										value={password}
										type="password"
										id="password"
										placeholder="Senha"
									/>
								</span>
							</div>

							<div className="input-group">
								<span>
									<label htmlFor="password-confirmation">Confirmação de senha</label>
									<input
										onChange={(e) => setPasswordConfirmation(e.target.value)}
										value={passwordConfirmation}
										type="password"
										id="password-confirmation"
										placeholder="Confirme a sua senha"
									/>
								</span>
							</div>

							<div className="button-area">
								<button className="button-back" onClick={() => setCurrentForm(currentForm - 1)}>
									Voltar
								</button>

								<button type="submit" className="button-success">
									Cadastrar
								</button>
							</div>
						</form>
					</section>

					<div className="user-card">
						<img height="150px" width="150px" src={profilePicture} />

						<div>
							<label htmlFor="card-name">Nome</label>
							<h3 id="card-name">{username}</h3>
						</div>

						<div>
							<label htmlFor="card-cpf">CPF</label>
							<h3 id="card-cpf">{cpf}</h3>
						</div>

						<div>
							<label htmlFor="card-rg">RG</label>
							<h3 id="card-rg">{rg}</h3>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}

	function PersonalInfo() {
		const phoneNumberMask = [
			'(',
			/\d/,
			/\d/,
			')',
			' ',
			/\d/,
			/\d/,
			/\d/,
			/\d/,
			/\d/,
			'-',
			/\d/,
			/\d/,
			/\d/,
			/\d/
		];

		function rgMask(s) {
			const rgMask1 = [ /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/ ];

			const rgMask2 = [ /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/ ];

			const returnMask = s.length < 7 ? rgMask2 : s.length === 7 ? false : rgMask1;

			return returnMask;
		}

		const cpfMask = [ /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/ ];

		const birthdateMask = [ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ ];

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
								<input
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									id="username"
									placeholder="Informe o seu nome completo"
								/>
							</span>
						</div>

						<div className="input-group">
							<span>
								<label htmlFor="cpf">CPF</label>
								<MaskedInput
									mask={cpfMask}
									value={cpf}
									guide={false}
									onChange={(e) => setCpf(e.target.value)}
									id="cpf"
									placeholder="Informe o seu CPF"
								/>
							</span>

							<span>
								<label htmlFor="rg">RG</label>
								<MaskedInput
									mask={rgMask(rg)}
									guide={false}
									value={rg}
									onChange={(e) => setRg(e.target.value)}
									id="rg"
									placeholder="Informe o seu RG"
								/>
							</span>

							<span>
								<label htmlFor="phone-number">N° de celular</label>
								<MaskedInput
									mask={phoneNumberMask}
									onChange={(e) => setPhoneNumber(e.target.value)}
									value={phoneNumber}
									guide={false}
									type="tel"
									id="phone-number"
									placeholder="Informe o número do seu celular, com DDD"
								/>
							</span>
						</div>

						<div className="input-group">
							<span>
								<label htmlFor="birthdate">Data de nascimento</label>
								<MaskedInput
									mask={birthdateMask}
									onChange={(e) => setBirthdate(e.target.value)}
									value={birthdate}
									guide={false}
									id="birthdate"
									placeholder="Informe a sua data de nascimento"
								/>
							</span>

							<span>
								<label htmlFor="gender">Sexo</label>
								<select
									onChange={(e) => setGender(e.target.value)}
									placeholder="teste"
									id="gender"
									name="gender"
								>
									<option value="" selected />
									<option value="Masculino">Masculino</option>
									<option value="Feminino">Feminino</option>
								</select>
							</span>

							<span>
								<label htmlFor="class-number">Turma</label>
								<select onChange={(e) => setClassNumber(e.target.value)} id="class-number" name="class">
									<option value="" selected />
									<option value="1">1</option>
									<option value="2">2</option>
								</select>
							</span>
						</div>

						<div className="button-area">
							<button className="button-next" onClick={() => setCurrentForm(currentForm + 1)}>
								Avançar
							</button>

							<Link className="link" to="/">
								<h4>Já possui cadastro? Faça login!</h4>
							</Link>
						</div>
					</form>
				</section>
			</Fragment>
		);
	}

	return (
		<div className="register-container">
			<div className="content">{formSwitch()}</div>
		</div>
	);
}
