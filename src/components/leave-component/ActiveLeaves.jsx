import React from "react";
import { Card, Row } from "react-bootstrap";
import { PieChart, pieChartDefaultProps  } from 'react-minimal-pie-chart';

function ActiveLeaves() {

    return (
        <Row className="active-leaves">
            <Card className="active-card mt-4 ms-4">
                <Card.Body>
                    <Card.Title>Your Active Leaves,</Card.Title>
                    <Card.Text>
                        <PieChart
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                        redius={pieChartDefaultProps.radius-50}
                        />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    );
}

export default ActiveLeaves;