/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react';
import { Button } from 'react-bootstrap';
import ListDisplayComponent from '../ListDisplayComponent';

interface GroupViewProps {
	name: string;
	id: number;
	childMeterNames: string[];
	childGroupNames: string[];
	fetchGroupChildren(id: number): void;
	beginEditingIfPossible(id: number): void;
	changeDisplayModeToEdit(): void;
}

export default class GroupViewComponent extends React.Component<GroupViewProps, {}> {
	constructor(props) {
		super(props);
		this.handleEditGroup = this.handleEditGroup.bind(this);
	}

	public componentWillMount() {
		this.props.fetchGroupChildren(this.props.id);
	}

	public render() {
		const nameStyle: React.CSSProperties = {
			textAlign: 'center'
		};
		const buttonPadding: React.CSSProperties = {
			marginTop: '10px'
		};
		const boldStyle: React.CSSProperties = {
			fontWeight: 'bold',
			margin: 0
		};
		return (
			<div>
				<h2 style={nameStyle}>{this.props.name}</h2>
				<div className='row'>
					<div className='col-xs-6'>
						<p style={boldStyle}>Child Meters:</p>
						<ListDisplayComponent items={this.props.childMeterNames} />
					</div>
					<div className='col-xs-6'>
						<p style={boldStyle}>Child Groups:</p>
						<ListDisplayComponent items={this.props.childGroupNames} />
					</div>
				</div>
				<Button style={buttonPadding} bsStyle='default' onClick={this.handleEditGroup}>Edit group</Button>
			</div>
		);
	}

	private handleEditGroup() {
		this.props.changeDisplayModeToEdit();
		this.props.beginEditingIfPossible(this.props.id);
	}
}
