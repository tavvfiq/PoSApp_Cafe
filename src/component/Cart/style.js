import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  menuList: {
    backgroundColor: '#E3E3E7',
    width: '100%',
    height: height - 117,
  },
  cardCartContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    alignSelf: 'center',
    paddingBottom: 0,
    paddingTop: 10,
  },
  cardCartImage: {
    width: 64,
    height: 64,
    borderRadius: 5,
    resizeMode: 'cover',
    marginRight: 10,
  },
  cardCartTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
    paddingRight: 5,
  },
  cardCartTitleText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 16,
    height: 40,
    width: '100%',
  },
  cardCartPriceText: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'left',
  },
  footerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#E3E3E7',
    elevation: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 6,
    alignSelf: 'center',
  },
  button: {
    width: 0.9 * width,
    height: 42,
    backgroundColor: '#AB84C8',
    borderRadius: 5,
    margin: 10,
    paddingTop: 2,
    elevation: 2,
  },
  counterButtonMerge: {
    display: 'flex',
    flexDirection: 'row',
    width: width * 0.55,
    paddingRight: 20,
  },
  orderTitle: {
    borderBottomWidth: 1,
    borderColor: '#E3E3E7',
    height: 45,
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 10,
  },
  subSection: {
    backgroundColor: 'white',
    elevation: 3,
    marginTop: 10,
    padding: 5,
  },
  subTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#E3E3E7',
    borderBottomWidth: 1,
    padding: 6,
  },
});

export default styles;
