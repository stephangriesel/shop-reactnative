import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.cartTotalAmount);
    return <View>
        <View>
            <Text>Total: <Text>${cartTotalAmount}</Text></Text>
            <Button title="Order" />
        </View>
        <View>
            <Text>Items</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({});

export default CartScreen;
