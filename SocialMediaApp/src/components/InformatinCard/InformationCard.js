import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7b68ee',
    padding: 15,
    borderRadius: 10,
    margin: 8,
    justifyContent: 'space-between',
  },
  text: {fontSize: 18, color: '#fdfdfd', fontWeight: 'bold'},

  addressContainer: {
    flex: 1,
    backgroundColor: '#7b68ee',
    paddingTop: 2,
    borderRadius: 10,
    margin: 8,
  },
  textHeader: {
    fontSize: 18,
    color: '#fdfdfd',
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
