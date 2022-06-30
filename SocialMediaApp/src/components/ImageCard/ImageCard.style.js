import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {padding: 10, flexDirection: 'row'},
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  //alignItems ve justifyContent bunları kullan. Flex kullan.
  inner_container: {padding: 10, flex: 1, justifyContent: 'center'}, // Flex içinde bulunduğu yerde kaplayabildiği kadar yer kaplar. Wrap özelliği kullanmış olur!!
  title: {fontWeight: 'bold', fontSize: 24},
  info_container: {flexDirection: 'row', flex: 1}, // yanında eleman var diyelim ki ve yanındaki elemanı olduğunca itelemek istiyorsun. O zaman flex kullan!!
  year: {paddingLeft: 10, color: 'grey', fontWeight: 'bold', fontSize: 12},
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {color: 'red'},
  content_container: {flexDirection: 'row', alignItems: 'center'},
});
