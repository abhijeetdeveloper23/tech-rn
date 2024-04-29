import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackIcon(props) {
  return (
    <Svg
      width={18}
      height={14}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.986 6.256l6.14-5.948a1.104 1.104 0 011.53 0l1.021.989a1.022 1.022 0 010 1.482L13.33 7l4.353 4.216a1.022 1.022 0 010 1.483l-1.02.993a1.104 1.104 0 01-1.531 0L8.99 7.744a1.024 1.024 0 01-.005-1.488zM.318 7.744l6.14 5.948c.424.41 1.11.41 1.53 0l1.02-.989a1.022 1.022 0 000-1.482L4.662 7l4.352-4.216a1.022 1.022 0 000-1.483L7.993.308a1.104 1.104 0 00-1.53 0L.322 6.256a1.024 1.024 0 00-.005 1.488z"
        fill="#000"
      />
    </Svg>
  )
}

export default BackIcon
