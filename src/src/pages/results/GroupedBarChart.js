import React from "react"

import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveBar = ({ /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={['ICT', 'ECE', 'AME', 'PrE']}
        indexBy="city"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.2}
        groupMode="grouped"
        colors={{ scheme: 'set2' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'fries'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'AME'
        //         },
        //         id: 'lines'
        //     }
        // ]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'City',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Count',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={8}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)

export default MyResponsiveBar

const data = [
    {
        "city": "Yangon",
        "ICT": 804,
        "hot dogColor": "hsl(278, 70%, 50%)",
        "ECE": 760,
        "burgerColor": "hsl(286, 70%, 50%)",
        "AME": 260,
        "sandwichColor": "hsl(19, 70%, 50%)",
        "PrE": 400,
        "kebabColor": "hsl(182, 70%, 50%)",
    },
    {
        "city": "Mandalay",
        "ICT": 546,
        "hot dogColor": "hsl(327, 70%, 50%)",
        "ECE": 421,
        "burgerColor": "hsl(256, 70%, 50%)",
        "AME": 102,
        "sandwichColor": "hsl(125, 70%, 50%)",
        "PrE": 120,
        "kebabColor": "hsl(128, 70%, 50%)",
    },
    {
        "city": "Tokyo",
        "ICT": 100,
        "hot dogColor": "hsl(127, 70%, 50%)",
        "ECE": 150,
        "burgerColor": "hsl(211, 70%, 50%)",
        "AME": 120,
        "sandwichColor": "hsl(300, 70%, 50%)",
        "PrE": 140,
        "kebabColor": "hsl(329, 70%, 50%)",
    },
    {
        "city": "Singapore",
        "ICT": 40,
        "hot dogColor": "hsl(188, 70%, 50%)",
        "ECE": 25,
        "burgerColor": "hsl(255, 70%, 50%)",
        "AME": 5,
        "sandwichColor": "hsl(267, 70%, 50%)",
        "PrE": 20,
        "kebabColor": "hsl(226, 70%, 50%)",
    }
]