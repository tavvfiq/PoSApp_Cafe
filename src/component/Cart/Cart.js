import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, ScrollView, ToastAndroid} from 'react-native';
import {Overlay} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {isEmpty} from 'underscore';
import {clearCart, addOrder} from '../../redux/action/menuAction';
import emptyCartIcon from '../../assets/img/shopper.png';
import CartCard from './Cart.Card';
import headerStyle from '../Header/headerStyle';
import backIcon from '../../assets/img/Arrow.png';
import styles from './style';

const FooterComponent = (props) => {
  return (
    <View style={styles.footerContainer}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          padding: 8,
          paddingLeft: 15,
        }}>
        <Text style={{fontSize: 16, fontWeight: '700'}}>
          Rp. {props.total.toLocaleString('id-ID')}
        </Text>
        <Text
          style={{
            marginLeft: 15,
            color: 'white',
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 16,
            fontWeight: '700',
            backgroundColor: '#AB84C8',
            borderRadius: 3,
          }}>
          Cash
        </Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Pressable
          onPress={() => {
            props.toggleVisible();
          }}
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
          style={styles.button}>
          <Text style={styles.buttonText}>Order</Text>
        </Pressable>
      </View>
    </View>
  );
};

const CartHeader = (props) => {
  const {category} = props;
  return (
    <View style={{...headerStyle.container, height: 55}}>
      <View style={{...headerStyle.header, justifyContent: 'flex-start', heigth: 55}}>
        <Pressable
          onPress={() => {
            props.navigation.goBack();
          }}
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: true}}
          style={{width: 22, height: 22, alignSelf: 'center', marginRight: 38}}>
          <FastImage
            style={{
              width: '100%',
              height: '100%',
              tintColor: 'black',
              resizeMode: 'cover',
              alignSelf: 'center',
            }}
            source={backIcon}
          />
        </Pressable>

        <Text style={headerStyle.headerText}>Cart</Text>
      </View>
    </View>
  );
};

const EmptyCart = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
        backgroundColor: 'white',
        paddingLeft: 50,
        paddingRight: 50,
      }}>
      <FastImage
        style={{width: 128, height: 128, alignSelf: 'center', margin: 60}}
        source={emptyCartIcon}
        {...{resizeMode: 'cover'}}
        tintColor="black"
      />
      <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 24, padding: 5}}>
        Whoops! still nothing in here! Grab some!
      </Text>
    </View>
  );
};

const Cart = ({navigation}) => {
  const [isVisible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const {cart, loading, msg} = useSelector((state) => state.menuState);
  const {session} = useSelector((state) => state.authState);
  const [invoice, setInvoice] = useState(0);

  const renderItem = (item) => {
    return <CartCard key={item.id} menu={item} />;
  };
  let price = 0;
  let ppn = 0;
  let total = 0;
  if (!isEmpty(cart)) {
    price = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    ppn = price * 0.1;
    total = price + ppn;
  }

  const toggleVisible = () => {
    setVisible(!isVisible);
  };

  useEffect(() => {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  }, [loading.addOrder]);

  useEffect(() => {
    setInvoice(Math.round(Math.random() * 100000));
  }, []);

  return (
    <>
      <Overlay isVisible={isVisible}>
        <>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Order the item(s)?</Text>
          <Pressable
            onPress={() => {
              const order = {
                invoice,
                customer_id: session.user.id,
                order_menu: cart.map((item) => {
                  return {menu_id: item.id, quantity: item.quantity};
                }),
                amount: total,
              };
              dispatch(addOrder(order));
              dispatch(clearCart());
              toggleVisible();
            }}
            android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
            style={{
              width: 100,
              height: 32,
              backgroundColor: '#AB84C8',
              alignSelf: 'center',
              borderRadius: 3,
              elevation: 2,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                paddingTop: 5,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Order
            </Text>
          </Pressable>
          <Pressable
            android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
            onPress={toggleVisible}
            style={{
              width: 100,
              height: 32,
              backgroundColor: '#E4304B',
              alignSelf: 'center',
              borderRadius: 3,
              elevation: 2,
              marginTop: 5,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                paddingTop: 5,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Cancel
            </Text>
          </Pressable>
        </>
      </Overlay>
      <CartHeader navigation={navigation} />
      {cart.length !== 0 ? (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.menuList}
            contentContainerStyle={{paddingBottom: 10}}
            contentInsetAdjustmentBehavior="automatic">
            <View
              style={{
                backgroundColor: 'white',
                elevation: 3,
                marginTop: 10,
              }}>
              <Text style={styles.orderTitle}>Order item(s)</Text>
              {cart.map((item) => {
                return renderItem(item);
              })}
            </View>
            <View style={styles.subSection}>
              <Text style={{fontSize: 18, fontWeight: 'bold', padding: 10}}>Payment details</Text>
              <View style={{margin: 10, borderWidth: 1, borderColor: '#E3E3E7', borderRadius: 5}}>
                <View style={styles.subTitle}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>Invoice Num.</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>#{invoice}</Text>
                </View>
                <View style={styles.subTitle}>
                  <Text style={{fontSize: 16}}>Price</Text>
                  <Text style={{fontSize: 16}}>{price.toLocaleString('id-ID')}</Text>
                </View>
                <View style={styles.subTitle}>
                  <Text style={{fontSize: 16}}>Ppn (10%)</Text>
                  <Text style={{fontSize: 16}}>{ppn.toLocaleString('id-ID')}</Text>
                </View>
                <View style={{...styles.subTitle, borderBottomWidth: 0}}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>Total payment</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    {total.toLocaleString('id-ID')}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <FooterComponent
            total={total}
            navigation={navigation}
            price={price}
            ppn={ppn}
            total={total}
            toggleVisible={toggleVisible}
          />
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
