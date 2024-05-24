
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import the image
import sessionImage from './assets/images/sessionImage.png';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJeKbzbS4tJ_xLPFjAW9-z8k3v6mHH4A678zPlK6MkQ&s' }} style={styles.profileImage} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.greetingText}>Good Afternoon,</Text>
          <Text style={styles.nameText}>Poonam!</Text>
        </View>
        <View style={styles.notificationContainer}>
          <Icon name="bell-outline" size={24} color="#fff" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>3</Text>
          </View>
        </View>
      </View>
      
      <Text style={styles.feelingText}>How are you feeling today?</Text>
      
      <View style={styles.feelingIconsContainer}>
        {boxData.map((item) => (
          <TouchableOpacity key={item.id} style={[styles.feelingBox, { backgroundColor: item.color }]}>
            <Icon name={item.icon} size={37} color="#fff" />
            <Text style={styles.feelingLabel}>{item.belowBoxContent}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.sessionBox}>
        <View style={styles.sessionTextContainer}>
          <Text style={styles.sessionTitle}>1 on 1 Sessions</Text>
          <Text style={styles.sessionSubtitle}>Let's open up to the things that matter the most</Text>
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.bookNowText}>Book Now</Text>
            <Icon name="calendar" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Image source={sessionImage} style={styles.sessionImage} />
      </View>
      
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="moon-waning-crescent" size={30} color="#fff" />
          <Text style={styles.actionButtonText}>Sleep</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Icon name="run" size={30} color="#fff" />
          <Text style={styles.actionButtonText}>Activity</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionButtonsContainer2}>
        <TouchableOpacity style={styles.actionButton3}>
          <Icon name="podcast" size={30} color="#000" />
          <Text style={styles.actionButtonText2}>Podcast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton4}>
          <Icon name="newspaper" size={30} color="#000" />
          <Text style={styles.actionButtonText2}>Articles</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const VideoScreen = () => <View style={styles.screenPlaceholder}><Text>Video Screen</Text></View>;
const MusicScreen = () => <View style={styles.screenPlaceholder}><Text>Music Screen</Text></View>;
const ProfileScreen = () => <View style={styles.screenPlaceholder}><Text>Profile Screen</Text></View>;

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#000',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Video') {
              iconName = focused ? 'video' : 'video-outline';
            } else if (route.name === 'Music') {
              iconName = focused ? 'music-note' : 'music-note-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account-outline';
            }
            return <Icon name={iconName} size={size} color={focused ? '#92A3FD' : '#C6C5C5'} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Video" component={VideoScreen} />
        <Tab.Screen name="Music" component={MusicScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const boxData = [
  {
    id: 1,
    color: '#FED235',
    onPress: () => console.log('Task 1 Pressed'),
    icon: 'emoticon-happy-outline',
    belowBoxContent: 'Calm',
  },
  {
    id: 2,
    color: '#AEAFF7',
    onPress: () => console.log('Task 2 Pressed'),
    icon: 'yin-yang',
    belowBoxContent: 'Manic',
  },
  {
    id: 3,
    color: '#A0E3E2',
    onPress: () => console.log('Task 3 Pressed'),
    icon: 'emoticon-happy-outline',
    belowBoxContent: 'Calm',
  },
  {
    id: 4,
    color: '#F09E54',
    onPress: () => console.log('Task 4 Pressed'),
    icon: 'emoticon-angry-outline',
    belowBoxContent: 'Angry',
  },
  {
    id: 5,
    color: '#C3F2A6',
    onPress: () => console.log('Task 5 Pressed'),
    icon: 'emoticon-sad-outline',
    belowBoxContent: 'Sad',
  },
];

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    background: 'linear-gradient(to bottom,#171233, #3B3170 ,#271F4F)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#B492FD',
    bottom: 5,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  greetingText: {
    color: '#fff',
    fontSize: 26,
    bottom: -65,
    left: -40,
    fontFamily: 'epilogue',
  },
  nameText: {
    color: '#fff',
    fontSize: 26,
    bottom: -70,
    fontFamily: 'epilogue',
    left: -40,
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#B492FD',
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#fff',
    fontSize: 12,
  },
  feelingText: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 20,
    bottom: -80,
    fontFamily: 'epilogue',
  },
  feelingIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: -70,
  },
  feelingBox: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
    left: -10,
    position: 'relative',
  },
  feelingLabel: {
    color: '#ffffff',
    marginTop: 5,
    fontSize: 12,
    position: 'absolute',
    bottom: -20,
  },
  sessionBox: {
    flexDirection: 'row',
    backgroundColor: '#7A73A1',
    padding: 20,
    borderRadius: 30,
    marginVertical: 20,
    bottom: -80,
    width: 300,
   

 height: 130,
    alignItems: 'center', // Align items vertically in the center
  },
  sessionTextContainer: {
    flex: 1, // Take up available space
  },
  sessionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'epilogue',
        bottom: -10,

  },
  sessionSubtitle: {
    color: '#fff',
    fontSize: 15,
    marginVertical: 10,
    fontFamily: 'epilogue',
            bottom: -10,

  },
  bookNowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    left: -10,
    bottom: 10,
  },
  bookNowText: {
    color: '#fff',
    marginRight: 5,
    fontFamily: 'epilogue',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sessionImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    bottom: -70,
  },
  actionButtonsContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    bottom: -10,
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    width: '45%',
    height: '60%',
    backgroundColor: '#1A5BF6',
  },
  actionButton2: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    width: '45%',
    height: '60%',
    backgroundColor: '#00AC83',
  },
  actionButton3: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    width: '45%',
    height: '60%',
    backgroundColor: '#FAF0DB',
  },
  actionButton4: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    width: '45%',
    height: '60%',
    backgroundColor: '#E1F5F1',
  },
  actionButtonText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 14,
  },
  actionButtonText2: {
    color: '#573926',
    marginTop: 5,
    fontSize: 14,
  },
  screenPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
  },
});

export default App;
