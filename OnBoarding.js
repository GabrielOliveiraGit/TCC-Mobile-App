import React, {useState, useRef } from "react";
import {View, Text, StyleSheet, FlatList, Animated} from 'react-native';
import OnBoardingItem from '../components/OnBoardingItem';
import slides from '../slides';

    export default OnBoarding = () => {

        const [currentIndex, setCurrentIndex] = useState(0);

        const scrollX = useRef (new Animated.Value(0)).current;

        const viewableItemsChanged = useRef(({ viewableItems}) => {
            setCurrentIndex(viewableItems[0].index);
        }).current;

        const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;
        
         return(
             <View style={styles.container}>
                 <FlatList data = {slides}

                  renderItem = {({ item }) => <OnBoardingItem item={item} />}

                  horizontal 

                  showHorizonatlScrollIndicator

                  pagingEnabled 

                  bounces={false}

                  keyExtractor={(item) => item.id} 

                  onScroll={Animated.event([{nativeEvent: {contentOffset: { x: scrollX } } }], {
                      useNativeDriver: false,
                  })}

                  onViewableItemsChanged = {viewableItemsChanged} />
             </View>
 
         );
    }

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
    });