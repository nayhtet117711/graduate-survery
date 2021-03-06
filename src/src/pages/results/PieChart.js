import React from "react"

import { ResponsivePie } from '@nivo/pie'

const Pie = ({ /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'male'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'female'
        //         },
        //         id: 'lines'
        //     }
        // ]}
        legends={[
            {
                anchor: 'left',
                direction: 'column',
                translateY: 100,
                translateX: -50,
                itemWidth: 100,
                itemHeight: 24,
                itemTextColor: '#555',
                symbolSize: 16,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

const data = [
    {
        "id": "Male",
        "label": "Male",
        "value": 84,
        "color": "hsl(160, 70%, 50%)"
    },
    {
        "id": "Female",
        "label": "Female",
        "value": 16,
        "color": "hsl(210, 70%, 50%)"
    },
]

export default Pie
