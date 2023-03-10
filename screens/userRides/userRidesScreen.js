import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const userRidesList = [
    {
        id: '1',
        passengerName: 'Tynisha Obey',
        date: 'Today',
        time: '01:17 pm',
        amount: 30.50,
        pickupAddress: '9 Bailey Drive, Fredericton, NB E3B 5A3',
        dropAddress: '1655 Island Pkwy, Kamloops, BC V2B 6Y9',
    },
    {
        id: '2',
        passengerName: 'Leslie Alexander',
        date: 'Fri 05 Jun, 2020',
        time: '06:31 am',
        amount: 25.50,
        pickupAddress: '38 Whiteshell Avenue, Winnipeg, MB R2C',
        dropAddress: '225 Belleville St, Victoria, BC V8V 1X1',
    },
    {
        id: '3',
        passengerName: 'Esther Howard',
        date: 'Thu 04 Jun, 2020',
        time: '07:00 am',
        amount: 35.50,
        pickupAddress: '6387 Arad Street, Niagara Falls, ON L2G 2Z7',
        dropAddress: '225 Belleville St, Victoria, BC V8V 1X1',
    },
];

const UserRidesScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {userRides()}
            </View>
        </SafeAreaView>
    )

    function userRides() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('RideDetail') }}
                style={styles.ridesInfoWrapStyle}
            >
                <View style={{ marginBottom: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Image
                        source={require('../../assets/images/users/user1.png')}
                        style={{ width: 55.0, height: 55.0, borderRadius: 27.5, }}
                    />
                    <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text numberOfLines={1} style={{ flex: 1, marginRight: Sizes.fixPadding, ...Fonts.blackColor16SemiBold }}>
                                {item.date} {item.time}
                            </Text>
                            <Text style={{ ...Fonts.primaryColor16Bold }}>
                                {`$`}{item.amount.toFixed(2)}
                            </Text>
                        </View>
                        <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 7.0, ...Fonts.grayColor14SemiBold }}>
                            {item.passengerName}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 24, alignItems: 'center' }}>
                        <View style={styles.currentLocationIconStyle}>
                            <View style={{ width: 7.0, height: 7.0, borderRadius: 3.5, backgroundColor: Colors.blackColor }} />
                        </View>
                    </View>
                    <Text numberOfLines={1} style={{ marginLeft: Sizes.fixPadding + 5.0, flex: 1, ...Fonts.blackColor15SemiBold }}>
                        {item.pickupAddress}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 24.0, alignItems: "center" }}>
                        <Text style={{ ...Fonts.blackColor8SemiBold, lineHeight: 6 }}>
                            •{`\n`}
                            •{`\n`}
                            •{`\n`}
                            •{`\n`}
                            •{`\n`}
                            •{`\n`}
                            •
                        </Text>
                    </View>
                    <View style={styles.currentToDropLocationInfoDividerStyle} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -(Sizes.fixPadding - 5.0) }}>
                    <View style={{ width: 24.0, alignItems: 'center' }}>
                        <MaterialIcons name="location-pin" size={24} color={Colors.primaryColor} />
                    </View>
                    <Text numberOfLines={1} style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0, ...Fonts.blackColor15SemiBold }}>
                        {item.dropAddress}
                    </Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={userRidesList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding, paddingBottom: Sizes.fixPadding - 5.0 }}
                showsVerticalScrollIndicator={false}
            />
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
                    My Rides
                </Text>
            </View>
        )
    }
}

export default UserRidesScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginVertical: Sizes.fixPadding * 2.0
    },
    currentToDropLocationInfoDividerStyle: {
        backgroundColor: Colors.shadowColor,
        height: 1.0,
        flex: 1,
        marginRight: Sizes.fixPadding * 2.5,
        marginLeft: Sizes.fixPadding
    },
    currentLocationIconStyle: {
        width: 18.0,
        height: 18.0,
        borderRadius: 9.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.blackColor,
        borderWidth: 2.0,
    },
    ridesInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
        borderColor: Colors.shadowColor,
        borderWidth: 1.0,
        borderBottomWidth: 0.0,
    }
})