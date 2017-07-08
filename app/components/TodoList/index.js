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
					renderRow={(d) => <Text key={d.id}>{d.title}</Text> }
					/>
			</View>
			)
	}

	item_onclick(task) {
		console.log('# hoge')
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
