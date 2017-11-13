/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { chartTypes } from '../reducers/graph';

interface ChartSelectProps {
	selectedChart: chartTypes;
	changeChartType(chartType: chartTypes): void;
}

/**
 * A component that allows users to select which chart should be displayed.
 */
export default class ChartSelectComponent extends React.Component<ChartSelectProps, {}> {
	constructor(props) {
		super(props);
		this.handleChangeChartType = this.handleChangeChartType.bind(this);
	}

	public render() {
		const divBottomPadding: React.CSSProperties = {
			paddingBottom: '15px'
		};

		const labelStyle: React.CSSProperties = {
			fontWeight: 'bold',
			margin: 0
		};

		return (
			<div style={divBottomPadding}>
				<p style={labelStyle}>Graph Type:</p>
				<ToggleButtonGroup
					type='radio'
					name='chartTypes'
					value={this.props.selectedChart}
					onChange={this.handleChangeChartType}
				>
					<ToggleButton value={chartTypes.line}>Line</ToggleButton>
					<ToggleButton value={chartTypes.bar}>Bar</ToggleButton>
					<ToggleButton value={chartTypes.compare}>Compare</ToggleButton>
				</ToggleButtonGroup>
			</div>
		);
	}

	private handleChangeChartType(value) {
		this.props.changeChartType(value);
	}
}
