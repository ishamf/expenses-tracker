import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import * as Actions from './actions'
import {getTotal} from './state'
import moment from 'moment'

import ExpenseList from './components/ExpenseList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  expenses: {
    flex: 5,
    alignSelf: 'stretch'
  },
  input: {
    alignSelf: 'stretch'
  }
})

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {text: ''}
  }

  render () {
    const {addExpense, clearData, total} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.total}>Total Expenses: {total}</Text>
          <Button
            onPress={() => {
              clearData()
            }}
            title='Clear Data'
          />
        </View>

        <ExpenseList style={styles.expenses} />

        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline={false}
          returnKeyType='go'
          keyboardType='numeric'
          placeholder={'Enter expense...'}
          onSubmitEditing={() => {
            addExpense({
              amount: parseInt(this.state.text),
              time: moment().valueOf()
            })
            this.setState({text: ''})
          }}
        />
      </View>
    )
  }
}

export default connect((state) => ({
  total: getTotal(state)
}), Actions)(App)
