import * as React from "react"
import Svg, { ClipPath, Defs,G,Path, Rect} from "react-native-svg"
import { View } from "react-native";

const SvgIcons = (props) => {
  switch(props.IconName){

    case "BW-Hype": return(
      <View>
       <Svg
        width={props.width}
        height={props.height}
        viewBox="0 0 500 500"
      >
        <Defs>
    <ClipPath id="clip-BlackWhite_Hype">
    </ClipPath>
  </Defs>

        <G id="BlackWhite_Hype" data-name="BlackWhite Hype" clip-path="url(#clip-BlackWhite_Hype)">
    <G id="Hype_Symbol" data-name="Hype Symbol" transform="translate(53.148 45.107)" style="isolation: isolate">
        <G id="Group_2" data-name="Group 2" transform="translate(162.997 -36.359) rotate(14)">
        <G id="Path_2" data-name="Path 2" transform="translate(0 0)" fill="none">
          <Path d="M63.863,0,88.719,194.743,0,281.6Z" stroke="none"/>
          <Path d="M 61.65614318847656 45.90003967285156 L 13.80764770507813 256.8828430175781 L 80.27931213378906 191.8098449707031 L 61.65614318847656 45.90003967285156 M 63.86260986328125 0 L 88.71865844726563 194.743408203125 L 1.52587890625e-05 281.5952758789063 L 63.86260986328125 0 Z" stroke="none" fill="#111"/>
        </G>
        <G id="Path_6" data-name="Path 6" transform="translate(182.186 452.719) rotate(180)" fill="none">
          <Path d="M63.863,0,88.719,194.743,0,281.6Z" stroke="none"/>
          <Path d="M 61.65614318847656 45.90003967285156 L 13.80764770507813 256.8828430175781 L 80.27931213378906 191.8098449707031 L 61.65614318847656 45.90003967285156 M 63.86260986328125 0 L 88.71865844726563 194.743408203125 L 1.52587890625e-05 281.5952758789063 L 63.86260986328125 0 Z" stroke="none" fill="#111"/>
        </G>
      </G>
      <G id="Path_7" data-name="Path 7" transform="translate(101.683 119.678)" fill="none">
        <Path d="M98.064,52.936l98.66,1.191L93.42,117.3H-7.164Z" stroke="none"/>
        <Path d="M 100.271858215332 60.9632568359375 L 21.24610900878906 109.3012390136719 L 91.16780853271484 109.3012390136719 L 168.8572998046875 61.79122924804688 L 100.271858215332 60.9632568359375 M 98.06373596191406 52.93600463867188 L 196.7240295410156 54.12703704833984 L 93.42010498046875 117.3012390136719 L -7.164291381835938 117.3012390136719 L 98.06373596191406 52.93600463867188 Z" stroke="none" fill="#111"/>
      </G>
      </G> 
      </G> 
      </Svg> 
      </View>
    );

    case "Colored-Hype":return(
      <Svg width={props.width}
      height={props.height} viewBox="0 0 70 100">
  <Defs>
    <ClipPath id="clip-Colored_Hype">
    </ClipPath>
  </Defs>
  <G id="Colored_Hype" data-name="Colored Hype" clip-path="url(#clip-Colored_Hype)">
    <G id="Hype_Symbol" data-name="Hype Symbol" transform="translate(-33.852 35.107)">
      <G id="Group_2" data-name="Group 2" transform="translate(76.784 -36.359) rotate(14)">
        <G id="Path_2" data-name="Path 2" transform="translate(0 0)" fill="#ffd32a">
          <Path d="M 1.725947380065918 56.84305191040039 L 13.31611061096191 5.737481594085693 L 17.8271427154541 41.08066940307617 L 1.725947380065918 56.84305191040039 Z" stroke="none"/>
          <Path d="M 13.04030227661133 11.47501754760742 L 3.451908111572266 53.75400161743164 L 16.77222061157227 40.71398162841797 L 13.04030227661133 11.47501754760742 M 13.59191703796387 3.814697265625e-06 L 18.88205718994141 41.44737243652344 L -3.814697265625e-06 59.93210220336914 L 13.59191703796387 3.814697265625e-06 Z" stroke="none" fill="#cca200"/>
        </G>
        <G id="Path_6" data-name="Path 6" transform="translate(38.775 96.353) rotate(180)" fill="#ffd32a">
          <Path d="M 1.725947380065918 56.84305191040039 L 13.31611061096191 5.737481594085693 L 17.8271427154541 41.08066940307617 L 1.725947380065918 56.84305191040039 Z" stroke="none"/>
          <Path d="M 13.04030227661133 11.47501754760742 L 3.451908111572266 53.75400161743164 L 16.77222061157227 40.71398162841797 L 13.04030227661133 11.47501754760742 M 13.59191703796387 3.814697265625e-06 L 18.88205718994141 41.44737243652344 L -3.814697265625e-06 59.93210220336914 L 13.59191703796387 3.814697265625e-06 Z" stroke="none" fill="#cca200"/>
        </G>
      </G>
      <G id="Path_7" data-name="Path 7" transform="translate(69.374 -44.819)" fill="#ffd32a">
        <Path d="M 13.96161079406738 65.63493347167969 L -3.612995147705078 65.63493347167969 L 15.50746822357178 53.93943786621094 L 32.74605178833008 54.14754486083984 L 13.96161079406738 65.63493347167969 Z" stroke="none"/>
        <Path d="M 15.78350353240967 54.94283294677734 L -0.06169700622558594 64.63493347167969 L 13.68007278442383 64.63493347167969 L 29.26271629333496 55.10556030273438 L 15.78350353240967 54.94283294677734 M 15.23144912719727 52.93602752685547 L 36.22937774658203 53.18952178955078 L 14.24313926696777 66.63493347167969 L -7.164310455322266 66.63493347167969 L 15.23144912719727 52.93602752685547 Z" stroke="none" fill="#cca200"/>
      </G>
    </G>
  </G>
</Svg>
    );

    case "saved":return(
      <Svg  width="100" height="100" viewBox="0 0 100 100">
  <Defs>
    <ClipPath id="clip-saved">
      <Rect width="100" height="100"/>
    </ClipPath>
  </Defs>
  <G id="saved" clip-path="url(#clip-saved)">
    <Rect width="100" height="100" fill="#fff"/>
    <Path id="save" d="M67.184,5H16.8A10.81,10.81,0,0,0,6,15.8V84.18a3.6,3.6,0,0,0,5.809,2.84L41.991,63.546,72.173,87.019a3.6,3.6,0,0,0,5.809-2.84V15.8A10.81,10.81,0,0,0,67.184,5Z" transform="translate(7 4)"/>
  </G>
</Svg>
    );

    case "unsaved":return(
      <Svg  width="100" height="100" viewBox="0 0 100 100">
  <Defs>
    <ClipPath id="clip-unsaved">
      <Rect width="100" height="100"/>
    </ClipPath>
  </Defs>
  <G id="unsaved" clip-path="url(#clip-unsaved)">
    <Rect width="100" height="100" fill="#fff"/>
    <Path id="save" d="M67.184,5H16.8A10.81,10.81,0,0,0,6,15.8V84.18a3.6,3.6,0,0,0,5.809,2.84L41.991,63.546,72.173,87.019a3.6,3.6,0,0,0,5.809-2.84V15.8A10.81,10.81,0,0,0,67.184,5Zm3.6,71.823L44.2,56.147a3.6,3.6,0,0,0-4.42,0L13.2,76.823V15.8a3.605,3.605,0,0,1,3.6-3.6H67.184a3.605,3.605,0,0,1,3.6,3.6Z" transform="translate(7 4)"/>
  </G>
</Svg>
    )

  }

  
}


export default SvgIcons