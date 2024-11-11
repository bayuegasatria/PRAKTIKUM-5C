import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function XLApp() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerInfo}>
            <MaterialCommunityIcons name="account-circle" size={50} color="#ffffff" />
            <Text style={styles.phoneNumber}>6287879648725</Text>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialCommunityIcons name="plus-circle" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.silverBadge}>
              <Text style={styles.badgeText}>Silver</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationBadge}>
              <MaterialCommunityIcons name="bell" size={20} color="#ffffff" />
              <View style={styles.notificationCount}>
                <Text style={styles.notificationText}>50</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Section */}
        <View style={styles.services}>
          {[
            { name: 'shopping', label: 'Beli Paket' },
            { name: 'gift', label: 'Ambil Bonus' },
            { name: 'qrcode-scan', label: 'Scan Voucher' },
            { name: 'account-multiple', label: 'Akrab' },
            { name: 'dots-horizontal', label: 'Lainnya' },
          ].map((service, index) => (
            <TouchableOpacity key={index} style={styles.serviceButton}>
              <MaterialCommunityIcons name={service.name} size={30} color="#ffffff" />
              <Text style={styles.serviceText}>{service.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Pulsa Information Section */}
        <View style={styles.pulsaContainer}>
          <View style={styles.pulsaHeader}>
            <Text style={styles.pulsaTitle}>Pulsa</Text>
            <TouchableOpacity style={styles.pulsaLater}>
              <MaterialCommunityIcons name="wallet" size={16} color="#333" />
              <Text style={styles.pulsaLaterText}>PulsaLater</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.pulsaAmount}>Rp442</Text>
          <Text style={styles.pulsaExpiry}>Masa tenggang: 03 November 2024</Text>
        </View>

        {/* Data Information Section */}
        <View style={styles.dataContainer}>
          <Text style={styles.dataAmount}>18 MB</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Lihat Paket Saya</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { name: 'home', label: 'Dashboard' },
          { name: 'gamepad-variant', label: 'Fun' },
          { name: 'store', label: 'XL Store' },
          { name: 'headset', label: 'XL Care' },
          { name: 'account', label: 'Profile' },
        ].map((nav, index) => (
          <TouchableOpacity key={index} style={styles.navButton}>
            <MaterialCommunityIcons name={nav.name} size={24} color="#000" />
            <Text style={styles.navText}>{nav.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2878fa',
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#285cfa',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneNumber: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  silverBadge: {
    backgroundColor: '#666',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  notificationBadge: {
    position: 'relative',
  },
  notificationCount: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#f00',
    borderRadius: 12,
    paddingHorizontal: 4,
  },
  notificationText: {
    color: '#fff',
    fontSize: 10,
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  serviceButton: {
    alignItems: 'center',
  },
  serviceText: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 5,
  },
  pulsaContainer: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 15,
    borderRadius: 8,
  },
  pulsaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pulsaTitle: {
    fontSize: 30,
    color: '#002c72',
    fontWeight: 'bold',
  },
  pulsaLater: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 9,
    borderRadius: 5,
  },
  pulsaLaterText: {
    color: '#333',
    fontSize: 17,
    marginLeft: 5,
  },
  pulsaAmount: {
    color: '#f00',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  pulsaExpiry: {
    color: '#888',
    fontSize: 12,
    marginBottom: 5,
  },
  linkText: {
    color: '#0000ee',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dataContainer: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  dataAmount: {
    color: '#002c72',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#000',
    fontSize: 12,
  },
});
