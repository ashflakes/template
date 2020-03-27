import React from 'react';

class Docs extends React.Component {
	constructor() {
		super();

		this.state = {
			value: ''
		};
	}

	onRadioChange = (e) => {
		this.setState({
			option: e.target.value
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div style={{ display: 'flex' }}>
						<h5>Nume, prenume: </h5>
						<div style={{ display: 'flex' }}>
							<input type="text" style={{ border: '2px solid #000000' }} />
							<input type="text" style={{ border: '2px solid #000000' }} />
						</div>
					</div>

					<div style={{ display: 'flex' }}>
						<h5>Data nașterii: </h5>
						<input type="date" style={{ border: '2px solid #000000' }} />
					</div>

					<div>
						<div style={{ display: 'flex' }}>
							<h5> Adresa locuinței: </h5>
							<input type="text" style={{ border: '2px solid #000000' }} />
						</div>
						<label>
							Se va completa adresa locuinței în care persoana locuiește în fapt, indiferent dacă este
							identică sau nu cu cea menționată în actul de identitate.
						</label>
					</div>

					<h5>
						Locul/locurile deplasării: :
						<input type="text" />
						<label>
							Se vor menționa locurile în care persoana se deplasează, în ordinea în care aceasta
							intenționează să-și desfășoare traseul.
						</label>
					</h5>

					<h5>Motivul deplasării:</h5>
					<ul>
						<li>
							<label>
								<input
									type="radio"
									value="1"
									checked={this.state.option === '1'}
									onChange={this.onRadioChange}
								/>
								<span>
									1.interes profesional, inclusiv între locuință/gospodărie și locul/locurile de
									desfășurare a activității profesionale și înapoi
								</span>
							</label>
						</li>

						<li>
							<label>
								<input
									type="radio"
									value="2"
									checked={this.state.option === '2'}
									onChange={this.onRadioChange}
								/>
								<span>
									2.asigurarea de bunuri care acoperă necesitățile de bază ale persoanelor și
									animalelor de companie/domestice
								</span>
							</label>
						</li>

						<li>
							<label>
								<input
									type="radio"
									value="3"
									checked={this.state.option === '3'}
									onChange={this.onRadioChange}
								/>
								<span>
									3.asistență medicală care nu poate fi amânată și nici realizată de la distanță
								</span>
							</label>
						</li>

						<li>
							<label>
								<input
									type="radio"
									value="4"
									checked={this.state.option === '4'}
									onChange={this.onRadioChange}
								/>
								<span>
									4.motive justificate, precum îngrijirea/ însoțirea unui minor/copilului, asistența
									persoanelor vârstnice, bolnave sau cu dizabilități ori deces al unui membru de
									familie
								</span>
							</label>
						</li>

						<li>
							<label>
								<input
									type="radio"
									value="5"
									checked={this.state.option === '5'}
									onChange={this.onRadioChange}
								/>
								<span>
									5.activitate fizică individuală (cu excluderea oricăror activități sportive de
									echipă/ colective) sau pentru nevoile animalelor de companie/domestice, în
									apropierea locuinței
								</span>
							</label>
						</li>

						<li>
							<label>
								<input
									type="radio"
									value="6"
									checked={this.state.option === '6'}
									onChange={this.onRadioChange}
								/>
								<span>6.realizarea de activități agricole</span>
							</label>
						</li>
						<h5>
							------------------------------------------------------------------------------------------------------
						</h5>
						<li>
							<label>
								<input
									type="radio"
									value="7"
									checked={this.state.option === '7'}
									onChange={this.onRadioChange}
								/>
								<span>7.donarea de sânge, la centrele de transfuzie sanguină</span>
							</label>
						</li>

						<li>
							<label>
								<input
									type="radio"
									value="8"
									checked={this.state.option === '8'}
									onChange={this.onRadioChange}
								/>
								<span>8.scopuri umanitare sau de voluntariat;</span>
							</label>
						</li>

						<li>
							<label>
								<input
									type="radio"
									value="9"
									checked={this.state.option === '9'}
									onChange={this.onRadioChange}
								/>
								<span>
									9.comercializarea de produse agroalimentare (în cazul producătorilor agricoli)
								</span>
							</label>
						</li>

						<li>
							<label>
								<input
									type="radio"
									value="10"
									checked={this.state.option === '10'}
									onChange={this.onRadioChange}
								/>
								<span>10. asigurarea de bunuri necesare desfășurării activității profesionale.</span>
							</label>
						</li>
						<label>
							Se va bifa doar motivul/motivele deplasării dintre cele prevăzute în listă, nefiind permise
							deplasări realizate invocând alte motive decât cele prevăzute în Ordonanța Militară nr.
							3/2020.
						</label>
					</ul>

					<div style={{ display: 'flex' }}>
						<h5>
							Data declarației
							<input type="date" />
						</h5>

						<h5>
							Semnătura
							<input type="text" />
						</h5>
					</div>
				</form>
				<strong>
					Persoanele care au împlinit vârsta de 65 de ani completează doar pentru motivele prevăzute în
					câmpurile 1-6, deplasarea fiind permisă zilnic doar în intervalul orar 11.00 – 13.00.{' '}
				</strong>
			</div>
		);
	}
}

export default Docs;
