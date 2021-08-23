import React,{useState} from 'react';
import LocationInfoBox from './LocationInfoBox'
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const Map = ({eventData, center, zoom}) => {
    const [locationInfo, setlocationInfo] =useState(null);
    const markers = eventData.map(ev => {
        if(ev.categories[0].id===8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
            onClick={()=> setlocationInfo({id:ev.id,title:ev.title})}/>
        }
        return null;
    })
    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{key:
                "AIzaSyA_0VrEQaYeJvy46iqfXGfTU_POKbA-JU4"
            }}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}
Map.defaultProps = {
    center: {
        lat:42.3265,
        lng:-122.8756
    },
    zoom:6
}

export default Map
