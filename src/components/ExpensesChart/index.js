import React, { useState } from "react";
import { Dimensions } from "react-native";
import colors from "../../constants/colors";
import { AreaChart, XAxis } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop, Path, Circle } from "react-native-svg";
import * as shape from "d3-shape";
import Tooltip from "../Tooltip";

const screenWidth = Dimensions.get("window").width;
// import { Container } from './styles';

const Gradient = ({ index }) => (
  <Defs key={index}>
    <LinearGradient id={"gradient"} x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
      <Stop offset={"0%"} stopColor={colors.secundaryText} stopOpacity={0.5} />
      <Stop offset={"100%"} stopColor={colors.primary} stopOpacity={1} />
    </LinearGradient>
  </Defs>
);

// const Line = ({ line }) => (
//   <Path
//       key={'line'}
//       d={line}
//       stroke={colors.secundaryText}
//       strokeWidth={ 3 }
//       fill={'none'}
//       onPressIn={(a, b, c) => console.log(a, b, c)}
//   />
// )

export default function ExpensesChart({ data, keyValue, keyLabel }) {
  const [tooltipX, setTooltipX] = useState(null);
  const [tooltipY, setTooltipY] = useState(null);
  const [tooltipIndex, setTooltipIndex] = useState(null);

  const ChartPoints = ({ x, y, color }) =>
    data.map((item, index) => (
      <Circle
        key={index}
        cx={x(item[keyLabel])}
        cy={y(item[keyValue])}
        r={3}
        //stroke={3}
        fill={colors.secundaryText}
        onPress={() => {
          setTooltipX(item[keyLabel])
          setTooltipY(item[keyValue])
          setTooltipIndex(index)
        }}
      />
    ));

  const Line = ({ line }) => (
    <Path
      key={"line"}
      d={line}
      stroke={colors.secundaryText}
      strokeWidth={3}
      fill={"none"}
      onPressIn={(a, b, c) => console.log(a, b, c)}
    />
  );

  return (
    <AreaChart
      style={{ height: 200, marginBottom: 10 }}
      data={data}
      curve={shape.curveNatural}
      yAccessor={({ item }) => item[keyValue]}
      xAccessor={({ item }) => item[keyLabel]}
      contentInset={{ top: 20, bottom: 20 }}
      svg={{
        stroke: "blue",
        fillOpacity: 0.8,
        scale: 1.002,
        strokeWidth: 0,
        fill: "url(#gradient)"
      }}
    >
      <Line />
      <Gradient />
      <XAxis
        data={data}
        svg={{
          fill: "rgb(97,98,107)",
          fontSize: 12,
          fontWeight: "bold",
          y: 210,
          x: 50
        }}
        xAccessor={({ item }) => item[keyLabel]}
        style={{ height: 220 }}
        formatLabel={value => " -" + value}
      />
      <ChartPoints color="#003F5A" />
      <Tooltip
        tooltipX={tooltipX}
        tooltipY={tooltipY}
        color="#003F5A"
        index={tooltipIndex}
        dataLength={data.length}
      />
    </AreaChart>
  );
}
