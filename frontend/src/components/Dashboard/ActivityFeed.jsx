// ActivityFeed.jsx
import React, { useState, useEffect } from 'react';
import { fetchActivities } from '../../services/api';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await fetchActivities();
        setActivities(data);
      } catch (error) {
        console.error('Error loading activities:', error);
      }
    };

    loadActivities();
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
