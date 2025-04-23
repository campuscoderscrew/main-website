
//npm install react-curved-text
import ReactCurvedText from 'react-curved-text';

interface CurvedArgs {
  name: string
  reversed: boolean
}


// TODO: Create a function to add empty spaces to center the text
export default function CurvedText({name, reversed} : CurvedArgs) {
  const text = reversed ? 
    ("‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎" + name) :
    ("‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎ ‎ ‎ ‎  ‎  " + name)
    return (
      <ReactCurvedText
        width={430}
        height={430}
        cx={215}      // Center X
        cy={215}      // Center Y
        rx={190}      // Horizontal radius (controls curvature)
        ry={190}      // Vertical radius (should be equal to rx for a more symmetrical curve)
        text={text}
        reversed={reversed}  // Reversing the curve for downward direction
        textProps={{ style: { fontSize: '50px', 
            fontFamily: 'neuton', // Use a web-safe font or load your custom font
            fill: reversed ? '#7886C7' : '#2D336B', // Text color
            dominantBaseline: 'middle'} }}
        svgProps={ {}}
        />
    );
  };