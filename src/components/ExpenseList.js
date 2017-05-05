import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, View, ListView} from 'react-native'
import {getExpenses} from '../state'

const styles = StyleSheet.create({
  container: {
  },
  expenseContainer: {
  },
  expense: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50
  },
  amount: {
    flex: 1,
    fontSize: 24
  },
  time: {
    flex: 1
  }
})

class ExpenseList extends React.Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.time !== r2.time})
    this.state = {
      dataSource: ds.cloneWithRows(props.expenses)
    }
  }

  render () {
    const style = this.props.style || {}

    return (
      <View style={style}>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.expenseContainer}>
              <View style={styles.expense}>
                <Text style={styles.amount}>{rowData.amount}</Text>
                <Text style={styles.time}>{rowData.time.format('dddd, MMMM Do YYYY, h:mm:ss a')}</Text>
              </View>
            </View>
          }
        />
      </View>
    )
  }
}

export default connect((state) => ({
  expenses: getExpenses(state)
}))(ExpenseList)
