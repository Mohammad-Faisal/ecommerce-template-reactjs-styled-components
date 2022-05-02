
import React, { useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {Icon} from "semantic-ui-react";

const OrderStatusHistory = (props) => {


    return (
        <VerticalTimeline>

            {props.statusHistory.map(statusItem =>
                <>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#009E7F', color: '#fff' }}
                        contentArrowStyle={{ borderRight:  '#009E7F' }}
                        date={new Date(statusItem.createdDate).toLocaleString()}
                        iconStyle={{ background: '#009E7F', color: '#fff' ,padding:"10px" }}
                        icon={<Icon name={"anchor"} />}
                    >
                        <h4 className="vertical-timeline-element-title">{statusItem.note}</h4>
                        <h5 className="vertical-timeline-element-subtitle">Updated by {statusItem.updatedByName}</h5>
                    </VerticalTimelineElement>
                </>
            )}

        </VerticalTimeline>
    )
}

export default OrderStatusHistory;