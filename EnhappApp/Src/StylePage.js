import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    width: '80%',
    height: 150,
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 9,
  },
  Homeheader: {
    width: '100%',
    overflow: 'scroll',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0%',
    padding: '4%',
    backgroundColor: 'white',
  },
  bg_white: {
    backgroundColor: 'white',
  },
  marginBottom: {
    marginBottom: 2,
  },
  Library: {
    backgroundColor: 'white',
    marginBottom: 100,
  },
  margin: {
    margin: 2,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
  },
  sub_label: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },

  div: {
    width: '45%',
    alignContent: 'center',
  },
  divSec: {
    width: '45%',
  },
  Profile_body: {
    backgroundColor: 'white',
    paddingTop: 20,
  },
  ProfileHeader_image: {
    width: '40%',
    height: 'auto',
    margin: 'auto',
    alignItems: 'center',
  },
  ProfileHeader_body: {
    width: '30%',
    height: 'auto',
    marginTop: 20,
    backgroundColor: 'white',
  },
  ProfileHeader_body_text_Primary: {
    fontSize: 18,
    fontWeight: '700',
  },
  ProfileHeader_body_text_Secondary: {
    fontSize: 15,
    fontWeight: '100',
  },
  DetailCard: {
    backgroundColor: 'white',
    marginTop: '0.5%',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
    width: '100%',
  },
  dropdown: {
    backgroundColor: 'inhert',
    borderColor: 'gray',
    borderWidth: 0.5,
    marginTop: 0,
    borderRadius: 5,
    padding: 4,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  Input: {
    width: '48%',
    backgroundColor: 'white',
    height: 46,
    margin:"auto"
  },

  Color_Box_Heading:{
    fontSize: 20, fontWeight: '900', marginBottom:20
  }
});

export {styles};
