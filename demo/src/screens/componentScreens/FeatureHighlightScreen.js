import React, {Component} from 'react';
import {FeatureHighlight, Constants, View, Text, Carousel, Button} from 'react-native-ui-lib'; // eslint-disable-line

class FeatureHighlightScreen extends Component {

  constructor(props) {
    super(props);
    this.closeHighlight = this.closeHighlight.bind(this);
  }

  state = {
    showFeatureHighlight: true,
  };

  closeHighlight() {
    this.setState({showFeatureHighlight: false});
  }

  render() {
    const {showFeatureHighlight} = this.state;
    return (
      <View flex center padding-25>
        <View>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, <Text>remaining</Text> essentially unchanged.
          </Text>
        </View>
        <View ref={r => (this.target = r)}>
          <Button label="Keep Reading" />
        </View>
        <FeatureHighlight
          visible={showFeatureHighlight}
          message="To edit your services or add new ones, tap here"
          confirmButtonProps={{label: 'Got It', onPress: this.closeHighlight}}
          target={this.target}
          getTarget={() => this.target}
        />
      </View>
    );
  }
}

export default FeatureHighlightScreen;
