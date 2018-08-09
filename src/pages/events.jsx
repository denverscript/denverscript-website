import React, { Component } from 'react';
import Helmet from 'react-helmet';
import fetchJsonp from 'fetch-jsonp';
import Events from '../components/Events/Events';
import config from '../../data/SiteConfig';

// LIMITED TO NEXT 3 EVENTS
const dSUrl =
  'https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=DenverScript&page=3';

class EventsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      events: []
    };
  }
  componentDidMount() {
    fetchJsonp(dSUrl)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            events: result.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, events, isLoaded } = this.state;
    return (
      <div className="about-container">
        <Helmet>
          <title>{`Events | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/events/`} />
        </Helmet>
        {error && <h1>error, bruh</h1>}
        {isLoaded && events && <Events events={this.state.events} />}
      </div>
    );
  }
}

export default EventsPage;
