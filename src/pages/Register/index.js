import React, { useState, Fragment } from 'react';
import './styles.css';
import api from '../../services/api';

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

	// This function use a RegExp to format the string according to the specifications of the brazilian CPF.
	function formatCpf(cpfString) {
		let formattedCpf = cpfString;

		const regex12 = /(\d{3}).(\d{3}).(\d{3})/;
		const regex8 = /(\d{3}).(\d{3})/;
		const regex4 = /(\d{3})/;

		// Apply a RegExp to correctly format the received digits with '.' and '-'
		if (cpfString.length === 12 && cpfString.charAt(11) !== '-') {
			formattedCpf = formattedCpf.replace(regex12, '$1.$2.$3-');
		} else if (cpfString.length === 8 && cpfString.charAt(7) !== '.') {
			formattedCpf = formattedCpf.replace(regex8, '$1.$2.');
		} else if (cpfString.length === 4 && cpfString.charAt(3) !== '.') {
			formattedCpf = formattedCpf.replace(regex4, '$1.');
		}

		// The CPF have 11 digits, plus 3 special characters, so the state will be updated only when length <= 14
		if (formattedCpf.length <= 14) setCpf(formattedCpf);
	}

	// This function use a RegExp to format the string according to the specifications of the brazilian RG.
	function formatRg(rgString) {
		let formattedRg = rgString;

		const regex2 = /(\d{1})/;
		const regex6 = /(\d{1}).(\d{3})/;

		if (rgString.length === 2 && rgString.charAt(1) !== '.') {
			formattedRg = formattedRg.replace(regex2, '$1.');
		} else if (rgString.length === 6 && rgString.charAt(5) !== '.') {
			formattedRg = formattedRg.replace(regex6, '$1.$2.');
		}

		if (formattedRg.length <= 9) setRg(formattedRg);
	}

	function formatBirthdate(birthdateString) {
		let formattedBirthdate = birthdateString;

		const regex3 = /(\d{2})/;
		const regex6 = /(\d{2})-(\d{2})/;

		if (birthdateString.length === 3 && birthdateString.charAt(2) !== '-') {
			formattedBirthdate = formattedBirthdate.replace(regex3, '$1-');
		} else if (birthdateString.length === 6 && birthdateString.charAt(5) !== '-') {
			formattedBirthdate = formattedBirthdate.replace(regex6, '$1-$2-');
		}

		if (formattedBirthdate.length <= 10) setBirthdate(formattedBirthdate);
	}

	function handleRegister(e) {
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

		console.log('Enviando formulário', data);

		api.post('/register', data);
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
								<input
									value={cpf}
									onChange={(e) => formatCpf(e.target.value)}
									id="cpf"
									placeholder="Informe o seu CPF"
								/>
							</span>

							<span>
								<label htmlFor="rg">RG</label>
								<input
									value={rg}
									onChange={(e) => formatRg(e.target.value)}
									id="rg"
									placeholder="Informe o seu RG"
								/>
							</span>

							<span>
								<label htmlFor="phone-number">N° de celular</label>
								<input
									onChange={(e) => setPhoneNumber(e.target.value)}
									id="phone-number"
									placeholder="Informe o número do seu celular, com DDD"
								/>
							</span>
						</div>

						<div className="input-group">
							<span>
								<label htmlFor="cpf">Data de nascimento</label>
								<input
									onChange={(e) => formatBirthdate(e.target.value)}
									value={birthdate}
									id="cpf"
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
							<button className="button-back" onClick={() => setCurrentForm(currentForm - 1)}>
								Voltar
							</button>

							<button className="button-next" onClick={() => setCurrentForm(currentForm + 1)}>
								Avançar
							</button>
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
