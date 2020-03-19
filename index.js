import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Model,
  asset,
} from 'react-360';

import Entity from 'Entity'

export default class Data_Structures_360 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('Earth.jpg')}/>
        <Entity
          source={{
            obj: asset('staic_assets/ocm-sphere.obj'),
          }}
          style={{
            transform: [{translate: [0, 0, -2]},
            {scaleX: 50 },
            { scaleY: 50 },
            { scaleZ: 50 },],
          }}
          wireframe={true}
        />
      </View>
    );
  }
};

// const styles = StyleSheet.create({
//   panel: {
//     // Fill the entire surface
//     width: 1000,
//     height: 600,
//     backgroundColor: 'rgba(255, 255, 255, 0.4)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   greetingBox: {
//     padding: 20,
//     backgroundColor: '#000000',
//     borderColor: '#639dda',
//     borderWidth: 2,
//   },
//   greeting: {
//     fontSize: 30,
//   },
// });

AppRegistry.registerComponent('Data_Structures_360', () => Data_Structures_360);
