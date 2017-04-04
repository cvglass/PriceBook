import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import Sketch from 'react-native-sketch';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sketch: {
    height: 250, // Height needed; Default: 200px
  },
});

class Signature extends React.Component {

  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  state = {
    encodedSignature: null,
  };

  /**
   * Clear / reset the drawing
   */
  clear() {
    this.sketch.clear();
  }

  /**
   * Do extra things after the sketch reset
   */
  onReset() {
    console.log('The drawing has been cleared!');
  }

  /**
   * The Sketch component provides a 'saveImage' function (promise),
   * so that you can save the drawing in the device and get an object
   * once the promise is resolved, containing the path of the image.
   */
  onSave() {
    this.sketch.saveImage(this.state.encodedSignature)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  /**
   * On every update (touch up from the drawing),
   * you'll receive the base64 representation of the drawing as a callback.
   */
  onUpdate(base64Image) {
    this.setState({ encodedSignature: base64Image });
  }

  render() {
    return (
      <View style={styles.container}>
        <Sketch
          fillColor="#f5f5f5"
          strokeColor="#111111"
          strokeThickness={2}
          onReset={this.onReset}
          onUpdate={this.onUpdate}
          ref={(sketch) => { this.sketch = sketch; }}
          style={styles.sketch}
        />
        <Button
          onPress={this.clear}
          title="Clear drawing"
        />
        <Button
          disabled={!this.state.encodedSignature}
          onPress={this.onSave}
          title="Save drawing"
        />
      </View>
    );
  }

}

export default Signature;
