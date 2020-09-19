import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 140,
    backgroundColor: 'white',
    elevation: 5,
  },
  header: {
    width,
    display: 'flex',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 5,
  },
  headerText: {
    textAlign: 'left',
    color: 'black',
    textAlignVertical: 'center',
    height: '100%',
    fontWeight: 'bold',
    fontSize: 24,
  },
  imageContainer: {
    width: 28,
    height: 28,
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonSmall: {
    height: 28,
    width: 86,
    backgroundColor: '#AB84C8',
    elevation: 3,
    borderRadius: 3,
    marginTop: 12,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonLarge: {
    height: 28,
    width: 128,
    backgroundColor: '#AB84C8',
    elevation: 3,
    borderRadius: 3,
    marginTop: 12,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default styles;
