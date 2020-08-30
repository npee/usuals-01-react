import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MainMapComponent extends Component {

    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
        };

        const seomyeon = { lat: 35.157717, lng: 129.059101 };

        return (
            <Map
                initialCenter={seomyeon}
                google={this.props.google}
                zoom={18}
                style={mapStyles}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
})(MainMapComponent);

