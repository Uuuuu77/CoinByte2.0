import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('/api/activities'); // Replace with your API endpoint
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="activity-item">
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
