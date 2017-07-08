import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	ListView,
} from 'react-native'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: [
				{
					id: 1,
					title: 'Buy milk',
					detail: '',
				},
				{
					id: 2,
					title: 'Buy chicken tigh',
					detail: '',
				},
				{
					id: 3,
					title: 'Pay forward',
					detail: 'Make the world peaceful',
				},
			]
		}
		for (const i = 0; i < 100; i++) {
			this.state.tasks.push({
				id: 100 + i,
				title: `Task ${i}`,
				detail: '',
			})
		}

		const ds = new ListView.DataSource({ 
			rowHasChanged: (d1, d2) => d1.title !== d2.title || d1.detail !== d2.detail
		})
		this.state.taskDataSource = ds.cloneWithRows(this.state.tasks)
	}

	render() {
		return (
			<View>
				<ListView
					dataSource={this.state.taskDataSource}
					renderRow={(d) => <Text key={d.id} style={styles.item}>{d.title}</Text> }
					renderSeparator={(_,id) => <View key={id} style={styles.separator} /> }
					/>
			</View>
			)
	}

	item_onclick(task) {
		console.log('# hoge')
	}
}

const styles = StyleSheet.create({
	item: {
		fontSize: 18,
		height: 44,
		padding: 10,
	},
	separator: {
		backgroundColor: '#999',
		height: StyleSheet.hairlineWidth,
	},
});
