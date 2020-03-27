import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Docs from './Docs';

const Dashboard = () => <h2>Dashboard</h2>;

class App extends React.Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	handleCall() {}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route path="/" component={Landing} exact />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/docs" component={Docs} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
