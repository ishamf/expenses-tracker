import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, TextInput} from 'react-native'
import * as Actions from './actions'

import ExpenseList from './components/ExpenseList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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
    return (
      <View style={styles.container}>
        <ExpenseList style={styles.expenses} />

        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline={false}
          returnKeyType='done'
          keyboardType='numeric'
          placeholder={'Enter expense...'}
        />
      </View>
    )
  }
}

export default connect((state) => ({

}), Actions)(App)
