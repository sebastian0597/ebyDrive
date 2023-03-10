import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const recentTransactions = [
    {
        id: '1',
        userImage: require('../../assets/images/users/user10.png'),
        transactionTitle: 'Paid for ride',
        transactionDate: 'Today',
        transactionTime: '10:25 am',
        isCredit: true,
        amount: 30.50,
    },
    {
        id: '2',
        userImage: require('../../assets/images/users/user11.png'),
        transactionTitle: 'Paid for ride',
        transactionDate: 'Wed 17 Jun, 2020',
        transactionTime: '07:39 am',
        isCredit: true,
        amount: 20.50,
    },
    {
        id: '3',
        userImage: require('../../assets/images/users/user12.png'),
        transactionTitle: 'Send to Friend',
        transactionDate: 'Mon 29 Jun, 2020',
        transactionTime: '07:40 am',
        isCredit: false,
        amount: 10.00,
    },
    {
        id: '4',
        userImage: require('../../assets/images/users/user13.png'),
        transactionTitle: 'Added to wallet',
        transactionDate: 'Tue 23 Jun, 2020',
        transactionTime: '01:17 pm',
        isCredit: true,
        amount: 30.50,
    },
    {
        id: '5',
        userImage: require('../../assets/images/users/user14.png'),
        transactionTitle: 'Send to Bank',
        transactionDate: 'Thu 04 Jun, 2020',
        transactionTime: '07:00 am',
        isCredit: false,
        amount: 12.50,
    },
    {
        id: '6',
        userImage: require('../../assets/images/users/user15.png'),
        transactionTitle: 'Paid for ride',
        transactionDate: 'Mon 01 Jun, 2020',
        transactionTime: '05:05 pm',
        isCredit: true,
        amount: 10.00,
    },
    {
        id: '7',
        userImage: require('../../assets/images/users/user16.png'),
        transactionTitle: 'Received from Friend',
        transactionDate: 'Fri 05 Jun, 2020',
        transactionTime: '06:31 am',
        isCredit: true,
        amount: 15.00,
    },
    {
        id: '8',
        userImage: require('../../assets/images/users/user17.png'),
        transactionTitle: 'Added to wallet',
        transactionDate: 'Wed 17 Jun, 2020',
        transactionTime: '06:49 am',
        isCredit: true,
        amount: 20.50,
    },
    {
        id: '9',
        userImage: require('../../assets/images/users/user18.png'),
        transactionTitle: 'Paid for ride',
        transactionDate: 'Mon 08 Jun, 2020',
        transactionTime: '01:55 am',
        isCredit: true,
        amount: 30.50,
    },
];

const WalletScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {walletInfo()}
                {recentTransactionsInfo()}
                {/* <FlatList
                    ListHeaderComponent={
                        <>
                            
                        </>
                    }
                    contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, paddingBottom: Sizes.fixPadding * 2.0, }}
                    showsVerticalScrollIndicator={false}
                /> */}
            </View>
        </SafeAreaView>
    )

    function recentTransactionsInfo() {
        const renderItem = ({ item, index }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                        <Image
                            source={item.userImage}
                            style={{ width: 50.0, height: 50.0, borderRadius: 25.0, }}
                        />
                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding + 5.0, }}>
                            <Text style={{ ...Fonts.blackColor16SemiBold }}>
                                {item.transactionTitle}
                            </Text>
                            <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 6.0, ...Fonts.grayColor14Regular }}>
                                {item.transactionDate}, {item.transactionTime}
                            </Text>
                        </View>
                    </View>
                    <Text style={item.isCredit ? { ...Fonts.primaryColor16Bold } : { ...Fonts.redColor16Bold }}>
                        {item.isCredit ? '+' : '-'}{`$`}{item.amount.toFixed(2)}
                    </Text>
                </View>
                {
                    index == recentTransactions.length - 1
                        ?
                        null
                        :
                        <View style={{ backgroundColor: Colors.shadowColor, height: 1.0, marginVertical: Sizes.fixPadding + 5.0 }} />
                }
            </View>
        )
        return (
            <View style={{ flex: 1, marginTop: Sizes.fixPadding }}>
                <Text style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding + 5.0, ...Fonts.blackColor18Bold }}>
                    Recent Transactions
                </Text>
                <FlatList
                    data={recentTransactions}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0, }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    function walletInfo() {
        return (
            <View style={styles.walletInfoWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.walletIconWrapStyle}>
                        <Entypo name="wallet" size={24} color={Colors.whiteColor} />
                    </View>
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0, }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor16Bold }}>
                            Wallet
                        </Text>
                        <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 7.0, ...Fonts.grayColor14SemiBold }}>
                            Lorem ipsum dolor sit amet.
                        </Text>
                    </View>
                </View>
                <Text style={{ marginTop: Sizes.fixPadding + 2.0, ...Fonts.grayColor14SemiBold }}>
                    Balance
                </Text>
                <Text style={{ marginTop: Sizes.fixPadding - 8.0, ...Fonts.blackColor18Bold }}>
                    $250.50
                </Text>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <AntDesign
                    name="arrowleft"
                    size={24}
                    color={Colors.blackColor}
                    onPress={() => navigation.pop()}
                />
                <Text style={{ flex: 1, marginLeft: Sizes.fixPadding + 2.0, ...Fonts.blackColor20ExtraBold }}>
                    Wallet
                </Text>
            </View>
        )
    }
}

export default WalletScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginVertical: Sizes.fixPadding * 2.0
    },
    walletInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding - 5.0,
        marginHorizontal: Sizes.fixPadding * 5.5,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding,
        padding: Sizes.fixPadding + 5.0,
    },
    walletIconWrapStyle: {
        width: 40.0,
        height: 40.0,
        borderRadius: 20.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.lightBlackColor,
        elevation: 3.0,
    },
    rightArrowIconWrapStyle: {
        width: 30.0,
        height: 30.0,
        borderRadius: 15.0,
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding + 5.0,
    },
})