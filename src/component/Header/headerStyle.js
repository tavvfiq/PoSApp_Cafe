import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    elevation: 5,
  },
  header: {
    width: width,
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
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});