import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import FontIcon from 'react-md/lib/FontIcons';
import moment from 'moment';
import './Events.scss';

const Events = ({ events }) => (
  <div className="about-container md-grid mobile-fix">
    {events.map(event => {
      const { name: eventName, id, venue } = event;
      const { address_1: address, city, name, state } = venue;
      return (
        <Card key={id} className="md-grid md-cell--8">
          <div className="about-wrapper">
            <CardText>
              <p className="about-text md-body-1">{eventName}</p>
              <p className="about-text md-body-1">
                <FontIcon>location_on</FontIcon>
                {name} {address} {city} {state}
              </p>
              <p>
                <FontIcon>calendar_today</FontIcon>
                {moment(event.time).format('MMM Do YY')}
              </p>
              <p>
                <FontIcon>people</FontIcon>
                {event.yes_rsvp_count} Scriptonites attending
              </p>

              <p className="about-text md-body-1">
                We care about providing a safe harassment-free community, so read our Code of
                Conduct (http://www.meetup.com/DenverScript/pages/Code_of_Conduct/) and know who to
                contact if there are issues.
              </p>
            </CardText>
          </div>
        </Card>
      );
    })}
  </div>
);

export default Events;
